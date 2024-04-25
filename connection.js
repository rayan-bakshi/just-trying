const mongoose=require('mongoose');
const connectTodatabase=async()=>{
  try{
mongoose.connect('mongodb://localhost:27017/prescription');
console.log("Connected to database");
  }catch(error){
    console.log(error)
  }
}
module.exports={connectTodatabase};
