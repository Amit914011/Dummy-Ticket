const db=require('../databaseConfi/dbconfig')

exports.adminLogin=(req,res)=>{
    let userName=req.body.userName
    let password=req.body.password
    let value=[[userName,password]]
    let sql='INSERT INTO login (userName,password) values  ?'
    db.query(sql,[value],(err,ersult)=>{
        if(err) throw err
        else(
            res.send('Data Saved Successfull')
        )
    })
}

exports.getLoginData=(req,res)=>{
    let sql='select * from login'
    db.query(sql,(err,result)=>{
        if(err) throw err
        else{
            res.json(result)
        }
    })
}