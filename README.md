# Items API

##  Setup -----------

create a directory titled "items-api"

go into the directory and add a server.js and an app.js file (in that order)

add mvc folders for MVC(Models folder, Views folder(not necessary now), Controllers folder) as well as a routes folder

add a .gitignore file then run "npm init -y " command to initialize node environment

run "npm i express mongoose morgan dotenv" to add these dependencies, add a .env file to to your projects root directory and inside add "node_modules" and ".env" to have it ignore pushing these files to github.

inside your package.json in your scripts section add a "dev" script that is set to "nodemon server.js"

Initialize your file as a github repo in your terminal by running "git init" in your terminal

  ## Pushing To Github ------------

  Go to "Github.com/new", create a new repo on Github and name it appropriately

  In your terminal run "git add -A", then run "git commit -m "(add relevant message for what's been done")

  Then paste the code for pushing an existing repository from the command line into your terminal

  git add -A, git commit -m "relevant message", then git push each time you want to save to your repo on github

## Building the Api --------------

### Server.js

Inside the server.js file we want to begin by requiring certain dependencies so that we can utilize their functions
look like this: 

<pre>require("dotenv").config()
const app = require("./app")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3000</pre>

 These will allow you to connect to your mongodb database, listen on a port, load .env file content when necessary

You would then write code to connect to your MONGO_URI connection string
and listen on a specified port(console.logging confirmations when both are running)

### App.js

The app.js is similar to server.js you need to require a few more dependencies and declare a couple variables, something like this:

<pre>
const express = require("express")
const morgan = require("morgan")
const itemRoutes = require("./routes/itemRoutes")
const app = express()

app.use(express.json())
app.use(morgan("combined"))
app.use("/items", itemRoutes)

module.exports = app
</pre>

This will allow you to utilize express to render json data, morgan to log requests in your terminal, and declare the path in your directory that pulls from your routes folder. It will also allow you to define the type of log-style of morgan, and finally initialize the url for your routes

### .env

Inside the .env file you only need to input your connection string to your database(found in your MongoDB Atlas), add the appropriate collection name in between the "/" and "?" and declare it as MONGO_URI. 


### Models

Inside your models folder add an item.js file this will be the file that holds your schema for how data is formatted in your database.

The Schema should look something like:
<pre>
const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    item: {type: String, required : true},
    price: {type: Number, required: true}
})

const Item = mongoose.model("Item", itemSchema)

module.exports = Item
</pre>

This allows you to define what a document will look like in your mongoDB database (an object) and will allow you to create, update and delete items based on the key:value pairs inside the item as well as the generated id each item gets when created.

### controllers



