const path=require('path');
const User=require('../modles/modle');
const { error } = require('console');

exports.getHomeData= async (req,res)=>{
    res.sendFile(path.join(__dirname, '../','views','app.html'))
};


exports.getData=async (req,res)=>{
   
  try{
  const data=await User.findAll();
  res.status(201).json(data);
  }catch{
    res.status(501).json({error:error})
  }
}

exports.addData= async (req,res)=>{
   try{
    const product=req.body.product;
    const price=req.body.price;
    const option=req.body.option;
    
    const data= await User.create({
        product: product,
        price: price,
        option: option
    })
    res.status(201).json({newData:data})
   }
   catch(err){
    console.log(err);
    res.status(500).json({err:err})
   }
}


exports.deleteData= async (req,res)=>{
    try{
        let user_id=req.params.Id;
        
        if(!user_id){
            res.status(400).json({error:'Id is missing'});
        }
        await User.destroy({where:{Id:user_id}})
        res.sendStatus(200)
    }
    catch(err){
        console.log(err)
    }
}