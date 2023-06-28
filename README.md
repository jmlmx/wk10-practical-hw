# Wk 10 Practical Items API


## How To Run The API ----------------

After forking and downloading the files to your local repository open it and then the terminal in vs code and create a .env file

Within that .env file you should input your MongoDb Atlas connection string and set it to a variable named "MONGO_URI" to connect to a database for storing your data, then save it.

In the terminal type in "npm start", you should see 2 confirmation messages that you're connected to mongodb and that you're listening on port 3000

Open Postman and MongoDB Atlas to test the endpoints and data storage:

In Postman change the body request being sent to raw JSON data

## Create An Item
For creating an item, in the url type in localhost:3000/items and make sure the request type is POST:<br>
in the request body type in:<br>
<pre>{
    "name": "<item name>",
    "price": "<item price>"
}
</pre>
and hit send

It should then show the item in the response body as well as a generated id

## Get/View All Items
For viewing all items, in the url type in localhost:3000/items and make sure the request type is GET:<br>
you do not need to enter any json data it will either show you an array of "item" objects if you've created some or an empty array if there are none to show

## Get A Specific Item
For getting a item, in the url type in localhost:3000/items and make sure the request type is POST:<br>
in the request body type in:<br>
<pre>{
    "name": "<item name>",
    "price": "<item price>"
}
</pre>
and hit send

It should then show the item in the response body as well as a generated id, then take that id and input it into the url after "items/" and change the request type to GET and hit send

It should then respond with the same "item" object just created

## Update An Item
For updating an item you'll need to input the id into the url after items like before and change the request type to PUT:<br>
you would then change whatever information there is in the item name and/or price and hit send

you should then see the  newly updated item with the same id #

## Delete An Item
For updating an item you'll need to input the id into the url after items like before and change the request type to DELETE:<br>
You do not need to send any json data in the request body for this one, like the "view all items" request<br>

You should see a confirmation message saying "Item Deleted"



