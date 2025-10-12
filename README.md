# Cloudsystemclass
//1. Code Execution & Output 

After running your index.js script: 
= What exact text does the console display when the document is 
inserted? 

Connected to MongoDB!
index.js:10
Document Inserted!
index.js:17
Query result: {_id: ObjectId, name: 'Alice', age: 25}

= What _id value is automatically assigned to the document? 
68ebb7f289b2261e48d1489e

//2. Modify and Observe 

Change the name field in index.js to your own name and the age to 
your birth year. Run the script again. 
= What new _id is generated for this document? 
68e73a8f25a5376aad7b8ef5

= What error occurs if you forget to call await	client.connect()? 
No error

//3. MongoDB Connection Failure 
o Intentionally break the MongoDB connection string (e.g., change the 
port to 27018). 
= What error message does NodeJS throw? 

C:\Program Files\nodejs\node.exe --experimental-network-inspection .\index.js
Error MongoServerSelectionError: connect ECONNREFUSED ::1:27018, connect ECONNREFUSED 127.0.0.1:27018
    at Topology.selectServer (c:\Users\Charan\Desktop\cloud ss\node_modules\mongodb\lib\sdam\topology.js:327:38)
    at async Topology._connect (c:\Users\Charan\Desktop\cloud ss\node_modules\mongodb\lib\sdam\topology.js:200:28)
    at async Topology.connect (c:\Users\Charan\Desktop\cloud ss\node_modules\mongodb\lib\sdam\topology.js:152:13)
    at async topologyConnect (c:\Users\Charan\Desktop\cloud ss\node_modules\mongodb\lib\mongo_client.js:264:17)
    at async MongoClient._connect (c:\Users\Charan\Desktop\cloud ss\node_modules\mongodb\lib\mongo_client.js:277:13)
    at async MongoClient.connect (c:\Users\Charan\Desktop\cloud ss\node_modules\mongodb\lib\mongo_client.js:202:13)
    at async main (C:\Users\Charan\Desktop\cloud ss\index.js:9:5) {errorLabelSet: Set(0), reason: TopologyDescription, code: undefined, stack: 'MongoServerSelectionError: connect ECONNREFUS…ers\\Charan\\Desktop\\cloud ss\\index.js:9:5)', message: 'connect ECONNREFUSED ::1:27018, connect ECONNREFUSED 127.0.0.1:27018', …}
No debugger available, can not send 'variables'

= What is the exact text of the error code (e.g., ECONNREFUSED)? 
Error MongoServerSelectionError: connect ECONNREFUSED ::1:27018, connect ECONNREFUSED 127.0.0.1:27018

//4. MongoDB Shell Query 
Use the MongoDB shell (not Compass) to: 
= List all documents in the testDB.users collection. 
{
  _id: ObjectId('68e73a8f25a5376aad7b8ef5'),
  name: 'Charan',
  age: 25
}
{
  _id: ObjectId('68ebb7f289b2261e48d1489e'),
  name: 'Charan',
  age: 25
}
{
  _id: ObjectId('68ebb8a0e9b3648a6f652a1a'),
  name: 'Charan',
  age: 25
}
{
  _id: ObjectId('68ebb93c4baf1cbfd0004faf'),
  name: 'Charan',
  age: 25
}

= What command did you use? Paste the full output. 
use testDB
db.users.find()

//5. File System & Dependencies 
= What is the absolute path to your project’s package-lock.json file?
C:\Users\Charan\Desktop\cloud ss

= What exact version of the mongodb driver is installed? 
1.47.1 

//6. Troubleshooting Practice 
Stop the MongoDB service and run the script. 
= What error occurs? 
No error

= What command restarts the service? 
sudo systemctl restart mongod

//7. GitHub Repository Structure 
On GitHub, navigate to your repository’s. 
= What timestamp is listed for your last commit? 
3 days ago
= How many files are present in this branch? 
5 files

//8. Performance Observation 
Time how long it takes for the script to print "Connected	to	MongoDB!". 
= What is the duration (in milliseconds)? 
70ms

= Does this time change if you run the script again? Why?
Yes it does
