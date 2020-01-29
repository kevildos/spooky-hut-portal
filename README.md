# Chore Chart for Apartment Spooky Hut 

A web application for Apartment #50 5235 Genesee Cove (dubbed the "Spooky Hut") that lets one observe the task assigned to them and increment it to the next person. Clicking on ones' blue "Chore" placeholder increments the placeholder to the next roommate. You can also click on an empty space to give yourself a "Skip" placeholder, and the "Chore" placeholder will skip over your spot to the next available one. 


The frontend of the app is made with React, Bootstrap, and CSS and stores persistent memory on an Express (NodeJs) server that reads and write to an in-memory datastore using NeDB, which is equivalent to a MongoDB collection.

## Quick Start
Working deployed website https://spooky-hut-portal.herokuapp.com/
It may take a few seconds to load the first time due to the way Heroku loads and unloads apps on  their servers.

If you want to run the development build, clone the Github repository and run `npm start` in the root project directory.

## Status
The app can be accessed and used on the herokuapp website. I have plans to add an authentication login service with Firebase Authentication, and more features like being able to text the server and have it increment the database on its own. 
