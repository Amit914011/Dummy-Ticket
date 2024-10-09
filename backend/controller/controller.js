const db=require('../dbConfig.js')
exports.loging=(req,res)=>{
    let username=req.body.username
    let password=req.body.password
    let sql='select * from dummyticketlogindata where username=? and password=?'
    db.query(sql,[username,password],(err,result)=>{
        if(err)throw err
        else{
            if(result.length>0){
                res.send(true)
            }else{
             res.send(false)
            }
        }
    })
}

exports.updatePrice = (req, res)=>{
    let id = req.params.id
    let newData = req.body
    let sql = 'update ticketPrice set ? where id = ?'
    db.query(sql, [newData, id], (err, result)=>{
        if(err) throw err
        else{
            res.send('Price Update')
        }
    })
}