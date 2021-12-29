###Google Books Search###


## Description

This is an application that is intended to allow users to prepare an account, seach for books using the google books api and save those books for later view. Its server, User Interface and functions are written in JSX, React, Javascript, CSS and HTML. The database used is a Mongo Database.

This project is still under development. Currently this app has a user interface to enable login, a functional server-database system and viable api call for the books being searched. To further develop these so they'd become more connected would require for me to introduce state into some components. The CSS of this project, however, is mobile-phone-friendly.

## Installation

If one would like to use this current code for his/her own application, he/she must first clone the repo from GitHub into git bash, run an npm install at the root of the file to obtain all dependencies, and register with google books to get an api key for the api routes. For security and functionality purposes, please ensure the API_KEY value is stored in the root .env file (this file is listed in .gitignore and therefore will not be exposed to the public upon publication to Github). If one is interested in developing this app further to have users save their books to an account, I recommend using mongoDB Atlas for the database. Starter code is available in the app for those who choose to take this route.

Heroku deployed link: https://hidden-savannah-06355.herokuapp.com/

1. Acquire prerequisites:
    1. sign up for github account
    2. install git bash terminal onto your computer (make VS Code editor of choice)
    3. link git bash to git hub using SSH key
    4. install VS Code
    5. install TechER on VS Code (to enable web display of current html files)
2. Copy this reposity by clicking the clone button from the code page
3. In git bash, type "git clone ", paste the url copied and hit enter
4. In git bash, type "cd googlebookssearch" and hit enter
5. In git bash, type "npm install" and hit enter to obtain all dependencies
6. In git bash, type "code ." to open this repository in VS Code
7. Register with google books to get an api key for the api routes
8. For security and functionality purposes, ensure the API_KEY value is stored in the root .env file (this file is listed in .gitignore and therefore will not be exposed to the public upon publication to Github)
9. MongoDB Atlas
    1. Sign up for an account wit MongoDB Atlas
    2. Make a project cluster with the name of your choice (preferably "googlebookssearch" to simplify project filing).
    3. Choose a provider for that cluster (free options are best for testing)
    4. List your computer as a database user on the Database User Tab.
    5. Add your computer's IP Address to the whitelist for database access on the Network Access tab.
    6. From the Databases tab, click the connect button, select "Connect Your Application" (second option), and copy the Mongo connection URI.
    7. Paste the connection URI into the .env file, substituting your password with MongoDB in the `<password>` section.
10. In gitbash or VS Code Terminal, type "npm start" to start the application
11. Alter code, save the file, restart the server and refresh the webpage until you've achieved the look/funciton desired. (Note: You would not need to restart the server if you install nodemon.)
12. Deployment (if taking my route)
    1. Sign up with Heroku
    2. Generate a heroku-github link
    3. Choose a hosting service type in Heroku (the free option is good for testing)
    4. Push to heroku
    Note: On this step, it is best to refer to the heroku tutorial to make your first Heroku deployment Link and push: https://devcenter.heroku.com/articles/getting-started-with-nodejs.
13. Push all updates to github account and heroku to update main code and posted website respectively.

## Functions for Smaller Screen Size
When the screen reaches 1270px, the three buttons listed on the far right of the home or user page are hidden and alternative buttons are displayed from a drop down button grouped with the display of the search bar. Aside from the physical look, the function of each button is the same as the former buttons they are titled after (About, Sign Up, Log In, Account, My Recipes, and Log Out).
## Credits

I've searched many different pages for trouble shooting. Below are the main sources I used to get started for what I did not know.

From previous projects, I initially used this video to help me get a better understanding for MongoDB and Express:
https://www.youtube.com/watch?v=7CqJlxBYj-M&t=5752s

From previous projects, I initially learned how to connect the application to Heroku using this video:
https://www.youtube.com/watch?v=5PaUiPyBDJY&t=484s

I used w3schools to find how to prepare the drop down button.
## License

One is free to clone down this work from github to make it their own.