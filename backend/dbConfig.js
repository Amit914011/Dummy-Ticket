const sql=require("mysql")

let databaseConnection=sql.createConnection(
    {
        user:"root",
        host:"localhost",
        database:"dummyTicketLogin"
    }
)
module.exports=databaseConnection;