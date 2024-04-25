const prescriptionSchema=require('./model');


const addPrescription=async(prescriptionData)=>{
  await prescriptionSchema.create({
    medicineName:prescriptionData.medicineName,
    dosage:prescriptionData.dosage,
    duration:prescriptionData.duration
  })
  console.log("Added successfully");
}

const getPrescription=async()=>{
const prescriptionData=await prescriptionSchema.find();
return prescriptionData;
}

module.exports={addPrescription,getPrescription};