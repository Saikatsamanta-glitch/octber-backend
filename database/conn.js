const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://saikatsamanta052:saikatsamanta052@littleninjas.4uvemyi.mongodb.net/xstore')
.then(()=>{
        console.log(`Connected to database`);
})
.catch((err)=>{
        console.log(err);
})