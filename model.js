const mongoose=require('mongoose');

const prescriptionSchema= mongoose.Schema({
  medicineName:{
    type:String,
  },
  dosage:{
    type:String,
  },
  duration:{
    type:String,
  },
});

module.exports=mongoose.model('prescription',prescriptionSchema);