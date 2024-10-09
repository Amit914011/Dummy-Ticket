const express=require('express')
const router=express.Router()
const loginRouter=require('../controller/controller')

router.post('/login',loginRouter.loging)

module.exports=router;