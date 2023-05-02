const express=require('express')
const router=express.Router()
const {adminSignUp,AdminLogin,menuDetails,getAllMenu,getUsers,makeAdmin} =require('../controller/admin')

router.post('/sign-up',adminSignUp)
router.post('/login',AdminLogin)
router.post('/menu-details',menuDetails)


router.get('/get-menu',getAllMenu)
router.get('/get-users',getUsers)
router.get('/make-admin:id',makeAdmin)

module.exports=router