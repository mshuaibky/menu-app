const Admin=require('../model/admin')
const bcrypt = require('bcrypt');
const User=require('../model/user')
const Menu=require('../model/menu')


//admin
exports.adminSignUp=async(req,res)=>{
    try {
        const { name, email, password } = req.body
        const checkName = new Promise((resolve, reject) => {
            if (!name || name?.length < 4) {
                reject(new Error('please enter a valid name'))
            } else {
                resolve()
            }
        })

        const checkEmail = new Promise((resolve, reject) => {
            Admin.findOne({ email }).then((email) => {
                if (email) {
                    res.status(401).json({ msg: 'user already exists' })
                    // reject(new Error('Email is already exists'))
                } else {
                    resolve()
                }
            })

        })
        Promise.all([checkName, checkEmail]).then(() => {
            if (password) {
                bcrypt.hash(password, 10, function (err, hash) {
                    if (err) {
                        res.status(500).send({ msg: 'user already exists', err: err })
                    }
                    const admin = new Admin({
                        name,
                        email,
                        password: hash
                    })
                    admin.save().then((user) => {
                        res.status(202).json({ success: 'registration success' })
                    })
                });
            }
        })
    } catch (error) {

    }
}
//admin Login
exports.AdminLogin=async(req,res)=>{
    try {
        console.log(req.body);
        const {email,password}=req.body
        let admin= await Admin.findOne({email})
        console.log(admin,'admin');
        if(admin){
            let validAdmin=await bcrypt.compare(password,admin.password)
            if(validAdmin){
                console.log(admin._id,'admin id');
               

                res.status(200).send({admin:admin})
            }else{
                res.status(500).send({msg:'something went wrong'})
            }
        }
        else if(!admin){
            let user=await User.findOne({email})
           
            if(user){
               if(user.isAdmin){
                console.log(user._id,'userId');
               
                res.status(200).send({msg:user})
               } else{
                res.status(500).send({msg:'something went wrong'})
               }
            }else{
                res.status(500).send({msg:'enter valid email and password'})
            }
        }
    } catch (error) {
        
    }
}
//menu details adding
exports.menuDetails=async(req,res)=>{
    try {
        console.log(req.body,'menu');
        const {name,foodOne,foodTwo,foodThree}=req.body
        let menu= await new Menu({
            name,
            foodOne,
            foodTwo,
            foodThree
        })
       menu.save().then((result)=>{
       if(result){
        res.status(200).send({msg:result})
       }
       })
       
    } catch (error) {
        res.send(error)
    }
}

exports.getAllMenu=async(req,res)=>{
    try {
       let allmenu=await Menu.find({})
       if(allmenu){
        res.status(200).send({menu:allmenu})
       }
    } catch (error) {
        res.send(error)
    }
}

exports.getUsers=async(req,res)=>{
    try {
        let users=await User.find({})
        console.log(users,'namm auser');
        if(users){
            res.status(200).send({user:users})
        }else{
            res.status(500).send({msg:'something went wrong'})
        }
    } catch (error) {
        res.send(error)
    }
}

exports.makeAdmin=async(req,res)=>{
   try {
    console.log(req.params.id,'namma id');
    const {id}=req.params
    let details=await User.findByIdAndUpdate(id,{isAdmin:true})
    if(details){
        let user=await User.find({})
        if(user){
            res.status(200).send({user:user})
        }
    }
   } catch (error) {
    res.send(error)
   }
}