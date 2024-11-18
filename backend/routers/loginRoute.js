const express=require('express')
const route=express.Router()
const adminLogin=require('../controllers/loginController')

route.post('/saveData',adminLogin.adminLogin)
route.get('/getData',adminLogin.getLoginData)

module.exports=route;