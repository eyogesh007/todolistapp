const express=require('express');
const app=express();
const mongoose=require('mongoose');
const Register=require('./regschema.js');
const Todoschema=require('./todoschema.js');
const jwt=require('jsonwebtoken');
const checktoken=require('./checktoken');
const cors = require('cors');
app.use(express.json());

mongoose.set("debug", true);
mongoose.set("strictQuery", false);
const options = {
  strict: "throw",
  strictQuery: false
};

mongoose.connect("mongodb+srv://yogesh:yoge111@cluster0.grmrsyh.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("db connected"))
app.use(cors({origin:"*"}))





app.get('/',(req,res)=>{
    res.send('todolist app')
})


  


app.post('/register',async(req,res)=>{
    console.log(req)
    const {username,email,password,confirmpassword} = req.body;
    let exist = await Register.findOne({username})
    if(exist){
        return res.send('User Already Exist')
    }
    if(password!== confirmpassword){
        return res.send('Passwords are not matching');
    }
    let newUser = new Register({
        username,
        email,
        password,
        confirmpassword
    })
    await newUser.save();
    res.send('Registered Successfully')
})

app.post('/login',async (req, res) => {
        const {username,password} = req.body;
        let exist = await Register.findOne({username});
         if(!exist) {
              res.send(null);
         }
         if(exist.password !== password) {
              res.send(null);
         }
        if(exist){
            console.log(exist._id)
        let auth={user:{id:exist._id} }
        jwt.sign(auth,'key',{expiresIn:360000000000000},(err,token)=> { res.json(token)})}
    }
    )

app.get('/user',checktoken,async(req,res)=>{
    let exist =await Register.findById(req.user.id);
    if(!exist){res.send("invalid")}
    else
        res.json(exist)
})   

app.post('/todo',checktoken,async(req,res)=>{
    let {date,title,task}=req.body;
    let exist = await Register.findById(req.user.id);
    let newuser=new Todoschema({
        user:req.user.id,
        username:exist.username,
        date,title,task
    });
    await newuser.save()
    res.send('data uploaded')
})

app.get('/todo',checktoken,async(req,res)=>{
    let exist = await Todoschema.find({user:req.user.id});
    return res.json(exist)
})

app.delete('/todo/:id',checktoken,async(req,res)=>{
    let exist = await Todoschema.find({user:req.user.id});
    let b=exist[req.params.id];
    await Todoschema.deleteOne({title:b.title,task:b.task}).then(res=>console.log(res,'deleted'));
})

app.listen(process.env.PORT || 5000,()=>{
    console.log('server running')
})