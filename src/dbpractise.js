// Create a cluster 
// Get connection string and in mongoDB compass paste it
// Add data to the newly created database
// npm i mongodb
// Now you can require("mongodb")
const {MongoClient} = require("mongodb");
const url = "mongodb+srv://learningnodeuser:ZZAQF9ZzkzvBtujS@learningnodejs.3sout63.mongodb.net/?retryWrites=true&w=majority&appName=LearningNodejs";
const client = new MongoClient(url);
const dbName = "HelloWorld";
async function main() {
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    const collection = db.collection("User");
    const data = {
        firstName: "Mahesh",
        lastName: "VN",
        city: "Kpm",
        phoneNumber: "9893218899"
    };
    // // Insert
    const insertResult = await collection.insertOne(data);
    console.log("Inserted data :",insertResult);
    // Read
    const findResult = await collection.find({}).toArray();
    console.log("Found documents =>", findResult);

    const countResult = await collection.countDocuments({});
    console.log("Count of Documents in User collection: ",countResult);
    // Find all documents with a filter of firstName: kailash
    const result = await collection.find({firstName: "kailash"}).count();
    console.log("result => ",result);
    
    return "done.";
    

}
main()
    .then(console.log)
    .catch(console.error)
    .finally(()=> client.close());