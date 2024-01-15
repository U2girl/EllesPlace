const mongoose =require('mongoose')

const connectDB =async()=>{
    try {
       await  mongoose.connect(
        "mongodb+srv://elycias:eDUTGpLHtkVUmjfR@cluster0.pmb0e6f.mongodb.net/Registration?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true }
        )
        console.log(" Blog Database connected successfully");

    }catch (error) {
        console.log("mogooose id broken",error);
        
    }
}

 module.exports=connectDB    