console.log("Current db:", db);
const db_names = db.getMongo().getDBs() // equivalent to show dbs
console.log("Databases:")
console.log(db_names)

db = db.getMongo().getDB("cvapp") // equivalent to use database (cvapp)
const collectionNames = db.getCollectionNames() // equivalent to show collections
console.log("Collections in cvapp database:")
console.log(collectionNames)
