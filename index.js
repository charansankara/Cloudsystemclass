const {MongoClient} = require('mongodb');
const drivers = [
        {
            name: "John Doe",
            vehicletype: "Sedan",
            isAvailable: true,
            rating: 4.8
        },
        {
            name: "Alice Smith",
            vehicletype: "SUV",
            isAvailable: false  ,
            rating: 4.6
        }
    ];
    console.log(drivers);

async function main(){
    const uri = "mongodb://localhost:27017"
    const client = new MongoClient(uri);

try{

    await client.connect();
    console.log("Connected to MongoDB!");

    const db = client.db("testDB");
    const driversCollection = db.collection("drivers");
    const collection = db.collection("users");

    drivers.forEach(async (drivers) => {
        const result = await driversCollection.insertOne(drivers);
        console.log(`New driver created with result: ${result}`);
    });

    const updateResult = await db.collection('drivers').updateOne(
        {name: "John Doe"},
        {$inc: { rating: 0.1 }}     
    );

    const deleteResult = await db.collection('drivers').deleteOne({isAvailable:false});
    console.log(`Driver deleted with results:${deleteResult}`);
    

    console.log(`Driver updated with results: ${updateResult}`);

    const availableDrivers = await db.collection('drivers').find({
        // isAvailable: false,
        rating: { $gte: 4.5 }
    }).toArray();
    console.log ("Available drivers",availableDrivers);

    //insert a doc
    await collection.insertOne({name:"Charan", age:25});
    console.log("Document Inserted!");

    //Query the doc
    const result = await collection.findOne({name:"Charan"});
    console.log("Query result:", result);

    } catch(err){
        console.error("Error", err);

    } finally{
        await client.close();

    }
}

main();