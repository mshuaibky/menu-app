const express=require('express')
const router=express.Router()
const {signUp,loginDetails,userLogout} =require('../controller/user')

router.post('/sign-up',signUp)
router.post('/user-login',loginDetails)
router.get('/user-logout',userLogout)


module.exports=router