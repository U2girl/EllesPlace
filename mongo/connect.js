const mongoose =require('mongoose')

const connectDB =async()=>{
    try {
       await  mongoose.connect(
       process.env.MONGODB_URI,
        { useNewUrlParser: true, useUnifiedTopology: true }
        )
        console.log(" Blog Database connected successfully");

    }catch (error) {
        console.log("mogooose id broken",error);
        
    }
}

 module.exports=connectDB    