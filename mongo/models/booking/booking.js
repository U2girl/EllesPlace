const mongoose= require('mongoose')

const LoginSchema=new mongoose.Schema({

name:{
type:String,

},

email:{
type:String,

},

date:{
type:Date,

},

location:{
type:String,

},
time:{
type:String,

},

});
const BLogInformation= mongoose.model('bookaHall',LoginSchema);
module.exports=BLogInformation

