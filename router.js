const express=require('express');
const bodyParser=require('body-parser');
const controler=require('../controler/controler');
const router=express.Router();

router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.get('/home', controler.getHomeData);
router.get('/get-data', controler.getData)
router.post('/add-data', controler.addData)
router.delete('/delete/:Id', controler.deleteData)


module.exports=router;
