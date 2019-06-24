const express=require('express');
const router=express.Router();
const Task=require('../models/Task');
router.get('/',async (req,res) => {
    try{
        const Tasks=await Task.find();
        res.send(Tasks);

    }
    catch(e){
        throw new Error(e);
    }
    
    
    // res.send("Router is Working Fine");
});
router.post('/',async (req,res) => {
    const tasks=new Task();
    tasks.title=req.body.title;
    
    await tasks.save();
    res.send("Task Added successfully");




    // res.send("Post Router working Fine");
});
router.put('/:id',async (req,res) => {

    console.log("REcieved update requiest"+req.body.isCompleted);
    const tasks =await Task.findOneAndUpdate({"_id":req.params.id},{'isCompleted':req.body.isCompleted});
    res.send("Updated Successfully");
    // res.send("Put Router working Fine");

});
router.delete('/:id',async (req,res) => {
    // res.send("Delete Router working Fine");
    const tasks =await Task.findByIdAndRemove(req.params.id);
    res.send(tasks);
    
});



module.exports=router;