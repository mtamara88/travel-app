# Project FEND Capstone - Travel App 
This Travel App Project is the final project of the Udacity Front End Web Developer Nanodegree Program.

## Table of contents
* [Overview](#overview)
* [Preview](#preview)
* [Sign up for API keys](#signup-for-api-keys)
* [Installation Guide](#installation-guide)
* [Development Strategy](#development-strategy)
* [Technologies](#technologies)
* [API Credentials](#api-crdentials)

## Overview
This is a web app, where the user can enter the location where he/she is travelling to and the date he/she is leaving. If the trip is within a week, you will get the current weather forecast. If the trip is in the future, you will get a predicted forecast. User can also get an image of the chosen location as well as the icon reflecting the weather forecast.

In this project we receive data from three different external APis and everything is done in a Webpack environment, using an express server.

## Preview
![Your Travel Planner](demo.gif)

## Different APIs used 
* [Geonames](http://www.geonames.org/)
* [Weatherbit](https://www.weatherbit.io/)
* [Pixabay](https://pixabay.com/)

API keys are stored in the .env file.

`GEONAMES_USERNAME=**************************`
`WEATHERBIT_API_KEY=**************************`
`PIXABAY_API_KEY=**************************`


## Installation Guide
* Install the following loaders and plugins:
`npm i -D @babel/core @babel/preset-env babel-loader`
`npm i -D style-loader node-sass css-loader sass-loader`
`npm i -D clean-webpack-plugin`
`npm i -D html-webpack-plugin`
`npm i -D mini-css-extract-plugin`
`npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin`
* Install Jest - `npm install --save-dev jest`

## Development Strategy
* Setting up project environment, making sure Node and packages installed, and included in server.js file.
* Use the following command to start the developer server. 
  This should open a new window in your browser with the app running on:
  `localhost:8000`

  To run the production server, run these commands:
  `npm run build-prod`
  `npm run start`

* This project has a Testing Unit to check if the main functions are working correctly. Testing is done with Jest.
  To run tests, use this command:
 `npm run test`

* Service Workers
  Service workers are installed in order for the project to be available when server is stopped.


## Technologies
* HTML
* CSS/SASS
* JavaScript
* Node.js
* Webpack Loaders and Plugins
* Jest
* Service workers

## Attribution
* Icon by [Flaticon.com](https://www.flaticon.com/).