# Location Insights

#### Awarded the Most Innovative Hack at the Mckinsey&Company 2016 Data Challenge

![Identifying High Income Areas of London](/readme/Identifying_High_Income_Areas.png "Identifying High Income Areas of London")
Location Insights - Identifying High Income Areas of London

## Inspiration
Deciding where to open up a new business can be a time-consuming and difficult endeavour. Many factors can influence the success of a business in a certain location, including the region's local demographics. Location Insights aims to help inform business owners on the demographics of regions within a city and assist them in making a decision on the location of their business.

## What it does
Using publicly available datasets from censuses and other sources, Location Insights constructs an interactive heat-map of a city that can be customized according to a business's desired target market demographic. This allows business owners to quickly and easily identify the most promising regions to open their business.

## How we built it
The data processing and normalization was done using a combination of python and MATLAB. The result was a JSON file containing all of the normalized values for each region, with each value corresponding to a certain demographic group. To display the specific regions on the map, publicly available GeoJSON data was used and displayed using the Google Maps API.

## Challenges we ran into
Finding the necessary data- in particular, finding a matching set of geographical (GeoJSON) and demographic (Census) data was very challenging. Oftentimes a complete set of demographic data was found but no corresponding GeoJSON data for each of the regions in the demogrpahic dataset. Data processing was also a challenge as we had to decide on the best way to normalize and structure the data in order for it to be usable in the front-end.

## What's next
Possibly making a larger set of cities available, as well as a greater range of demographics and other useful values for business starters (e.g. commercial renting prices in the area)

#### Demo Pictures

![Filter By Ethnicity - Indian](/readme/Filter_By_Indian_Ethnicity.png "Filtering By Ethnicity - Indian")
Filtering By Ethnicity - Indian

![Filtering By Parameters: (19-25) (Females) (High Income)](/readme/Young_High_Income_Females.png "Filtering By Parameters: (19-25) (Females) (High Income)")
Filtering By Parameters: (19-25) (Females) (High Income)
