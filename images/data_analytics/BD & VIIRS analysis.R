
# AUTHOR: JEFFREY BLAY
E:/FINAL PROJECT/FINAL THESIS DOCS/PUBLICATION/RSASE-Remote Sensing Applications-Society and Environment/KAREN - (10_02_24)/BD & VIIRS analysis.R
#1. Normalization of BD and VIIRS
#2. Create grids of VIIRS 
#3. Extract mean BD value to the VIIRS grid
#4. Plot of distribution of BD and VIIRS variables to make sure it's reasonable
#5. Calculate the difference and classification of consistency


#Action
#(0) Follow the workflow above to complete the code in R
#(1) Clip the raster before normalization to prevent skewed distribution for both BD and VIIRS
#(2) Use "rasterToPolygons" to create 500m grids from VIIRS
#(3) Use "extract" to calculate mean BD value within the VIIRS grids
#(4) Use "tiff" to generate graphics with larger font size (easy manipulation)

#install.packages("rgdal")

# LIBRARIES
#Import Libraries
library(raster)
#library(rgdal)
library(sf)
library(ggplot2)
library(tidyverse)




setwd("E:/FINAL PROJECT/FINAL THESIS DOCS/PUBLICATION/Data & Codes/Data")

# VIIRS
# VIIRS NORMALIZATION AND CLIPPING
# Defining raster and mosaicking

# raster_files <- list.files(path = "E:/FINAL PROJECT/FINAL THESIS DOCS/PUBLICATION/Data & Codes/Data", pattern = "\\.tif$",full.names = T)
# raster_files


(raster_files=list.files("./Data_update/VIIRS",pattern = ".tif", full.names=T))
(out=gsub("VIIRS","N_VIIRS",raster_files))


# Read and stack the rasters
rasters <- lapply(raster_files, raster)

for(i in 1:5){
  print(summary(values(rasters[[i]])))
}

# Mosaic the rasters
mosaic_raster <- do.call(mosaic, c(rasters, fun = mean))  # You can change the function based on your needs




# Loading shapefiles



# Step 1: Load the shapefiles
shapefile_paths <- list.files(path = "./Data_update/Shapefiles", pattern = "\\.shp$", full.names = TRUE)
shapefiles <- lapply(shapefile_paths, st_read)

# Identify common columns
common_columns <- Reduce(intersect, lapply(shapefiles, names))

standardize_columns <- function(shapefile, common_columns) {
  # Add missing columns with NA
  missing_columns <- setdiff(common_columns, names(shapefile))
  shapefile[missing_columns] <- NA
  # Reorder columns to match common columns
  shapefile <- shapefile[common_columns]
  return(shapefile)
}

# Apply standardization to all shapefiles
standardized_shapefiles <- lapply(shapefiles, function(shp) standardize_columns(shp, common_columns))


# Step 2: Merge the shapefiles
merged_shapefile <- do.call(rbind, standardized_shapefiles)


#Make sure you limit the BD study area to building area for the normalization
mosaic_raster <- mask(mosaic_raster,merged_shapefile)
plot(mosaic_raster)



# Normalize the values between 0 and 1
(min_val <- min(values(mosaic_raster), na.rm = TRUE))
#Maximum is too high due to outlier value in Accra
(max_val <- max(values(mosaic_raster), na.rm=T)) 
#Use the 99th percentile for the ceiling
(max_val <- quantile(values(mosaic_raster),0.99,na.rm=T))
normalized_mosaic <- (mosaic_raster - min_val) / (max_val - min_val)
values(normalized_mosaic)[values(normalized_mosaic)>1]=1

sum(!is.na(values(normalized_mosaic)))



value_rs=values(normalized_mosaic)[!is.na(values(normalized_mosaic))]
value_raw=values(mosaic_raster)[!is.na(values(mosaic_raster))]

summary(value_rs)
summary(value_raw)
value_raw[order(value_raw,decreasing=T)]





# Create the histogram plot with semi-transparent colors
p = ggplot(data.frame(value_rs), aes(x = value_rs)) +
  geom_histogram(fill = "blue", color = "black", alpha = 0.7, bins = 30) +
  labs(title = "Distribution of value_rs",
       x = "Value (rs)", y = "Frequency") +
  theme_minimal()


#setwd("./Plot") 
#tiff('./Test_figure1.tiff', units="in", width=4, height=3, res=300)
#p
#dev.off()

tiff('./Test_figure2.tiff', units="in", width=10, height=7.5, res=300)
p
dev.off()

plot(normalized_mosaic)

# Save the normalized mosaic
writeRaster(normalized_mosaic, "./Data_update/VIIRS/N_VIIRS_mosaic_update.tif", format = "GTiff", overwrite = TRUE)


sum(!is.na(values(normalized_mosaic)))



# Convert raster to polygons (each cell becomes a polygon)
viirs_polygon <- rasterToPolygons(normalized_mosaic, dissolve = FALSE)

# Loading building density data
BD_30m <- raster("E:/FINAL PROJECT/FURTHER EXPLORATION/NEW CO-OCCURRENCE ANALSYS/Filtered_buildingDensity.tif")

# Aggregate raster to 480m resolution(approximately 500m)

#BD_480m  <- aggregate(raster_30m, fact=16, fun=mean)

# Use this shapefile to extract the normalized BD value
BD_500m = viirs_polygon
names(BD_500m)
BD_500m$layer=NA

# extract bd values with viirs polygon#
BD_500m = extract(BD_30m, viirs_polygon, fun = mean, na.rm=T, df = T)

viirs_polygon$BD<- BD_500m

#checking colums
names(viirs_polygon)

# CATEGORISATION
#extracting dataframe
excel <- viirs_polygon@data

#Creating copy
viz <- excel

#Checking values
str(viz)

#rounding values and extracting vital values for data
viz$pointID <- viz$BD$ID
viz$BD <- round(viz$BD$Band_1,2)
viz$VIIRS <- round(viz$layer,2)


#Sampling columns and creating ID's
viz <- viz[,c(3,2,4)]
head(viz)
dim(viz)

#Check for NA values and delete if necessary
na_count <- colSums(is.na(viz))
na_count

viz = read.csv("E:/FINAL PROJECT/FINAL THESIS DOCS/PUBLICATION/Data & Codes/Data/Data_update/BD_VIIRS_updated.csv")

#Remove all rows with NA values

viz <- na.omit(viz)

dim(viz)

# Find the statistical difference between the two variables
viz$diff <- viz$VIIRS - viz$BD 

#Convert the dataframe to tibble - This makes it easy for the subsequent data engineering/processing
viz <- as_tibble(viz)

head(viz)

#Plotting the distribution to check for normality
hist(viz$diff) # most of the points are close to zero, which is good for analysis

#plot(viz$BD,viz$VIIRS,xlab="Urban intensity",ylab="Nighttime Lighting", main="Distribution Plot (470m)") #plotting 

#Create quantiles and identify thresholds based on the Statistical difference
diff_qt <- quantile(viz$diff,c(0.05, 0.95)) 
diff_qt

#Create categorisations based on the  on the lower and upper percentile thresholds of the distribution
#Threshold values = -0.34,0.44

#CONSISTENT DEVELOPMENT CATEGORY
viz_cns <- filter(viz, diff > -0.34  & diff < 0.44) #filtering category based on threshold
plot(viz_cns$BD,viz_cns$VIIRS) #plotting to check results
viz_cns['Category'] <-1 #assign values for category
viz_cns['Name'] <- "Consistent system" #label category
dim(viz_cns) #check dimension
head(viz_cns) #check final data

#CONTRADICTORY DEVELOPMENT CATEGORY
viz_cnt <- filter(viz, diff <= -0.34) #filtering category based on threshold
plot(viz_cnt$BD,viz_cnt$VIIRS) #plotting to check results
viz_cnt["Category"] <- 2 #assign values for category
viz_cnt['Name'] <- "H-L Contradictory system" #label category
head(viz_cnt) #check final data

#L-H CONTRADICTORY
viz_out <- filter(viz, diff >= 0.44) #filtering category based on threshold
plot(viz_out$BD,viz_out$VIIRS) #plotting to check results
viz_out["Category"] <- 3 #assign values for category
viz_out['Name'] <- "L-H Contradictory system" #label category
head(viz_out) #check final data

#Bind all the dataframes
r <- rbind(viz_cns,viz_cnt,viz_out)
head(r)

#Plotting
p <- ggplot(
  r, 
  aes(x = BD, y=VIIRS, colour = Name)
) +
  geom_point(show.legend = T, alpha = 0.7) +
  scale_color_manual(values = c("gold","red", "blue")) +
  scale_size(range = c(0, 3)) +
  scale_fill_viridis_c(option = "A",breaks = c(1,2,3)) +
  theme_classic() +
  labs(x = "Building density (normalised)", y = "Electricity provision (normalised) ",title = "",color="Categories") +
  theme(
    text = element_text(size = 28),   # Set text size for all elements
    axis.text.x = element_text(size = 22),  # Set x-axis text size
    axis.text.y = element_text(size = 22),  # Set y-axis text size
    axis.title.x = element_text(size = 28), # Set x-axis title size
    axis.title.y = element_text(size = 28), # Set y-axis title size
    legend.text = element_text(size = 28), # Set legend text size
    legend.title = element_text(size = 28), # Set legend title size
    legend.spacing.y = unit(5, "cm"),
    legend.key.height = unit(3, "line") 
  )
p

#Save categorisation plot as a tiff file
tiff('./BD_VIIRS_plot2.tiff', units="in", width=14, height=9.5, res=300)
p
dev.off()

#CREATE CATEGORISATION MAPS FOR EACH METRO
#Join the categorisation dataframe back to the polygon shapefile and convert to raster.
#Export raster for visualization

# Joining dataframe back to shapefile.

library(sp)

#create dataframe from polygon shapefile
viirs_polygon_df <- as.data.frame(viirs_polygon@data)
str(viirs_polygon_df) #Check attributes
names(viirs_polygon_df) #check names


# Unnest the BD column to merge data
viirs_polygon_unnested <- viirs_polygon_df %>%
  unnest(cols = c(BD)) %>%
  rename(BD.ID = ID, BD.Band_1 = Band_1)  # Rename for clarity

# Check the structure of the unnested dataframe
str(viirs_polygon_unnested)


#Perform the join, keeping the geometry from the polygon shapefile
merged_data <- viirs_polygon_unnested %>%
  left_join(r, by=c("BD.ID" = "pointID"))

#Check data
head(merged_data)
dim(merged_data)

#Join merged data with polygon shapefile
merged_spdf <- viirs_polygon
merged_spdf@data <- merged_data

#Check attributes
dim(merged_spdf)
names(merged_spdf)


# Convert SpatialPolygonsDataFrame to sf object
bd_viirs_sf <- st_as_sf(merged_spdf)
names(bd_viirs_sf)

#Check for NA values and delete if necessary
na_count <- colSums(is.na(bd_viirs_sf))
na_count

#Remove all rows with NA values
bd_viirs_sf <- na.omit(bd_viirs_sf)

#Export polygon shapefile
st_write(bd_viirs_sf, "E:/FINAL PROJECT/FINAL THESIS DOCS/PUBLICATION/Data & Codes/Data/Data_update/extracted/new/BD_viirs_Polygon_final.shp", driver = 'ESRI Shapefile')

head(bd_viirs_sf)

#CONTINUE IN ARCGIS PRO


# Expand the bounding box slightly
#buffer <- 0.01  # Adjust as needed (in degrees for geographic coordinates)
#bbox_expanded <- st_bbox(bd_viirs_sf) + c(-buffer, -buffer, buffer, buffer)

# Create a new raster template using the expanded bounding box
#raster_template <- raster(nrows = nrows, ncols = ncols, 
                         # xmn = bbox_expanded["xmin"], xmx = bbox_expanded["xmax"], 
                          #ymn = bbox_expanded["ymin"], ymx = bbox_expanded["ymax"])


# Convert sf object to a raster, specifying the field you want to rasterize (e.g., BD)
#raster_template <- raster(nrows = 100, ncols = 100, extent(merged_sf))  # Adjust the resolution and extent
#raster_output <- rasterize(bd_viirs_sf, raster_template, field = "Names", fun = modal)  # Replace "BD" with your desired column

#plot(raster_output)


# Save the raster as a .tif file
#writeRaster(raster_output, "E:/FINAL PROJECT/FINAL THESIS DOCS/PUBLICATION/Data & Codes/Data/Data_update/extracted/new/BD_viirs_Polygon_final.tif", format = "GTiff")

# Save as a csv
#write.csv(viirs_polygon@data, "E:/FINAL PROJECT/FINAL THESIS DOCS/PUBLICATION/Data & Codes/Data/Data_update/extracted/new/BD_viirs_PolygonR.csv")


