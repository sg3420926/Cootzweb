const express=require('express');
const router=express.Router();
const exam=require('../modal/Examsc')


router.get('/ij',(req,res)=>{
    res.send("<h1>daklfjldj</h1>")
    console.log("its good")
})
router.post("/examdata",async (req,res)=>{
    console.log(req.body)
    res.send(true)
   })
module.exports = router