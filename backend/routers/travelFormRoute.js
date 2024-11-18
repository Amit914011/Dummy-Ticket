const express=require('express')
const route=express.Router()
const travelData=require('../controllers/travelFormController')

route.post('/saveTravelData',travelData.saveTravelData)
route.get('/getTravelData',travelData.getTravelData)
module.exports=route