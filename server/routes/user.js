const express=require('express')
const router=express.Router()
const {signUp,loginDetails} =require('../controller/user')

router.post('/sign-up',signUp)
router.post('/user-login',loginDetails)


module.exports=router