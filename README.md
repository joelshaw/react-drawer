# React Drawer Component

Table of Contents
------
[1. Overview](#overview)

[2. Running the Application](#running-the-application)

[3. Technology](#technology)

[4. Using the Component](#using-the-component)

[5. Accessibility](#accessibility)

----

## Overview
This is a highly adaptable, reusable UI component written for use within a React project.

----
## Running the Application

### Installation
Step 1: Pull the source code from the Git Repo

Step 2: Run `yarn install` to install all of the required dependencies for the application to run.

Step 3: Once all of your dependencies have installed, you should be able to now run the app. To do so, run `yarn run start:dev`. This will start the Webpack server.

Step 4: Navigate to http://localhost:3000/

----

## Technologies

The app has been built using React and ReactDOM.

For development, we're using Webpack as our module builder and WebpackDevServer to run our app locally.


----

## Using the Component

Reusing this component is incredibly simple. Within the 'main.js' file located within the 'src' directory is where the drawer component gets loaded.

You've probably noticed we're added the title dynamically to the component using `props` within the main file. There are several reasons why this is happening, but the main reason is for easy component identification. (Say you're reusing this component 25 times. Being able to easily see your drawer's title will make your life significantly easier.) 

----

## Accessibility
