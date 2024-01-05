const mongoose = require('mongoose');

const product_schema = new mongoose.Schema({
        name:{type:String, required:true},
        img:{type:String, required: true},
        cost:{type:Number, required: true}
})

module.exports = new mongoose.model('Product',product_schema)