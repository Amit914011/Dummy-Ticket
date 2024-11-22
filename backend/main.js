const express = require('express')
const db=require('./databaseConfi/dbconfig')
const adminLogin=require('./routers/loginRoute')
const travelData=require('./routers/travelFormRoute')
const bodyParser=require('body-parser')
const cors=require('cors')
const app=express()
const port=3500

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())



// databse connection here
db.connect((err)=>{
    if(err) throw err
    else(
        console.log('database connected successfull')
    )

})

// login table create here
const loginTable=`
CREATE TABLE IF NOT EXISTS login (
    id int AUTO_INCREMENT NOT NULL,
    userName varchar(255),
    password varchar(255),
   primary key (id)
);
`
db.query(loginTable,(err,result)=>{
    if(err) throw err
    else(
        console.log("Login table created successfull")
    )
})




// create table of travels Data
const createTravelDataTable=`
CREATE TABLE IF NOT EXISTS travel_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    selectedOption VARCHAR(50),
   flightType VARCHAR(50),
    routes JSON,
    hotels JSON
);
`
db.query(createTravelDataTable,(err,result)=>{
    if(err) throw err
    else(
        console.log('Create Travel Data Table Successfull')
    )
})



// Contact Details

// const contactDetailsTable=`
// CREATE TABLE IF NOT EXISTS Contact_details (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     selectedOption VARCHAR(50),
//    flightType VARCHAR(50),
//     routes JSON,
//     hotels JSON
// );
// `


// API here
app.use('/api',adminLogin)
app.use('/api',travelData)

app.listen(port,()=>{
    console.log(`Server Running on ${port}`)
})