const router = require("express").Router();

const Person = require('../models/schema')

router.post('/add',(req,res)=>{
    const user = new Person(req.body);
    user.save((err)=>{
        if (err){
            return res.status(400).json({success:false,error:err})
        }
        else{
            return res.status(200).json({success:true})
        }
    });
});

router.get("/",(req,res)=>{
    Person.find().exec((err,persons)=>{
        if (err){
            return res.send(400).json({success:false,error:err})
        }
        else{
            return res.status(200).json({success:true,persons:persons})
        }
    })
})

router.get("/details/:id",(req,res)=>{
    Person.findById(req.params.id,(err,persons)=>{
        if (err){
            return res.send(400).json({success:false,error:err})
        }
        else{
            return res.status(200).json({success:true,persons:persons})
        }
    })
})



router.put("/update/:id",(req,res)=>{
    Person.findByIdAndUpdate(
        req.params.id, {
            $set:req.body
        },
        (err,persons)=>{
            if (err){
                return res.status(400).json({success:false})
            }
            else{
                return res.status(200).json({success:true})
            }
        }
    )
})

router.delete('/delete/:id',(req,res)=>{
    Person.findByIdAndDelete(req.params.id,(err,deleteditem)=>{
        if (err){
            return res.status(400).json({success:false})
        }
        else{
            return res.status(200).json({success:true,deleteditem:deleteditem})
        }
    })
})
module.exports = router;
