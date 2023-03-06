// ==================================================================================
// goal: create a new document in the collection named "users" in the "cvapp" database
// ==================================================================================

use cvapp;  // switch the database to cvapp
db;  // check that the current database is cvapp

// insert a new document to users collection by using the `insertOne`
db.users.insertOne(
    {
        first_name: "Javad",
        last_name: "Ebadi",
        description: "Blah Blah Blah",
        email: "javad@javadebadi.com",
        languages: ["Azerbaijani", "English", "Farsi", "French", "Turkish"],
        title: "Solution Architect",
        _id: "javad@javadebadi.com"
    }
);


