const express=require('express');
const router=require('./router/router');
const cors=require('cors');
const app=express();
app.use(express.static('views'))
app.use('/user',router);

app.use(cors());
app.listen(3000 , console.log('app is listning port number 3000'))