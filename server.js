const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
require('./database/conn');
app.use(cors())
const product_data = require('./database/product_model')

app.get('/',async(req,res)=>{
        const response = await product_data.find({});
        res.json(response)
})



app.listen(port,()=>{
        console.log(`Connected to port ${port} 🚀`);
})