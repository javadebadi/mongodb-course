// ==================================================================================
// goal: create a new document in the collection named "users" in the "cvapp" database
// ==================================================================================

use cvapp;  // switch the database to cvapp
db;  // check that the current database is cvapp

// insert a new document to "users" collection by using the `insertOne`
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
    
    
    
    
    
// ==================================================================================
// goal: create a document in the "users" collection without "_id" key
// ==================================================================================
// create an object (document) in shell
new_user = {
    first_name: "nobody",
    last_name: "nothing",
    email: "nobody@nobody.com"
};
// insert another document but do not provide the "_id" key for the document
db.users.insertOne(new_user);

// check the documents in "users" collections and see whether the second
// document has the "_id" key
db.users.find()





// ==================================================================================
// goal: insert many objects in the "users" collection at the same time
// ==================================================================================
// insert many users at once into collection
many_users = [
    {
        first_name: "Richard",
        last_name: "Feynman"
    },
    {
        first_name: "Steven",
        last_name: "Weinberg"
    },
];
db.users.insertMany(many_users);
//check the documents in the "users" collection
db.users.find()




// ==================================================================================
// goal: insert many objects in the "users" collection with conflicting "_id"s
// ==================================================================================
// insert many object "users" collection with conflicting "_id"s 
// and see how many of them are inserted into the database
db.users.insertMany(
    [
        {
            _id: 0,
            title: "Principles of Physics"
        },
        {
            _id: 1,
            title: "General Relativity"
        },
        {
            _id: 1,
            title: "Mathematical Universe"
        },
        {
            _id: 2,
            title: "Lord of the Rings"
        },
    ]
)
// you will see only two of these objects are inserted to "users" collection





// ==================================================================================
// goal: insert many objects in the "users" collection with conflicting "_id"s
//       but try to insert as many document as possible
// ==================================================================================
// insert many object "users" collection with conflicting "_id"s
// but with ordered:false option 
// and see how many of them are inserted into the database
db.users.insertMany(
    [
        {
            _id: 10,
            title: "Harry Potter and Philosopher"
        },
        {
            _id: 11,
            title: "A subtle art"
        },
        {
            _id: 11,
            title: "Value Investment"
        },
        {
            _id: 12,
            title: "Greatest Game Ever"
        },
    ],
    {
        "ordered": false
    }
)
// you will see this time three of these objects are inserted to "users" collection
// with "ordered": false MongoDB inserts each of the documents without care
// to insert objects in ordered way, and therfore inserts as documents as 
// possible to the collection
