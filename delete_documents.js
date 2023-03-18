// =====================================================================
// goal: delete documents from "books" collection of "cvapp" database
// =====================================================================

// delete one document with _id=0 from "books" collection of "cvapp" database
db.books.deleteOne({_id: 0});


// delete many books with _id > 10 from "books" collection of "cvapp" database
db.books.deleteMany({_id: {"$gt": 10}});


// delete the whole "books" collection from "cvapp" database
// solution one: non-efficient
db.books.deleteMany({});
// solution two: better solution to 
db.books.drop();

