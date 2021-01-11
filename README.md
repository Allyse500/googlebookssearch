###Google Books Search###

This is an application that allows a user to seach for books using the google books api.

It is still under development to allow users to save the books they find.

##Code##

If one would like to use this current code for his/her own application, he/she must first
clone the repo from GitHub into git bash, run an npm install at the root of the file to 
obtain all dependencies, and register with google books to get an api key for the api routes.
For security and functionality purposes, please ensure the API_KEY value is stored in the
root .env file (this file is listed in .gitignore and therefore will not be exposed to
the public upon publication to Github). If one is interested in developing this app further
to have users save their books to an account, I recommend using mongoDB Atlas for the database.
Starter code is available in the app for those who choose to take this route.

Heroku deployed link: https://hidden-savannah-06355.herokuapp.com/
