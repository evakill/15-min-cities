README
---
This site was my final project for URBS419: Transportation, Spring 2021, at University of Pennsylvania. 

## Introduction

First popularized by the mayor of Paris, Anne Higaldo, the 15-minute city is one where all residents can access their basic needs within a 15-minute walk, bike, or transit ride from their place of residence. This urbanist trend is catching on, and American cities have begun to integrate the idea into their planning practices. This standard aims to decentralize urban spaces, equitably distribute amenities and transit infrastructure, and promote sustainability by reducing the use of private vehicles.

In this project, I investigate the 15-minute city framework in the context of Philadelphia. My research method was twofold: 1) a programmatic analysis of the routing time between residential locations and nearby amenities, and 2) qualitative interviews focused on transportation habits and experiences. Through the integration of these methods, I hope to illustrate the extent to which the 15-minute city framework applies to Philadelphia, and the stories of how people experience it.

## Application

This is a React app to display the results of my research. Computed data from [this Python script](https://colab.research.google.com/drive/1ufub9jYpZwcSzIp0Hr0R3etS017fRUhS?usp=sharing) is stored in a [static data file](./src/data-csv.js) (see intermediate data files [here](https://github.com/evakill/urbs-data)) and rendered on interactive Mapbox maps. Metrics tied to each map are rendered in [data modules](./src/Data.js) and users interact with each map using [filters](./src/Filters.js). A map is rendered for each of my research interviewees accompanied by a text description of the interview. The app is hosted on Heroku and autodeploys from `master`.

## Conclusions
Visit https://fifteen-minute-cities-phl-8e06dcf9bfba.herokuapp.com/ and see for yourself!
