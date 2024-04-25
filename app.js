const connectTodatabase=require('./connection');
const prescriptionFunction=require('./function');
const express=require('express');

const app=express();
const PORT=8000;

//api
app.get('/',(req,res)=>{
  res.send({message:"Helloe world"})
})
app.use(express.json());
app.get('/fetchPrescriptionData',async(req,res)=>{
  const data=await prescriptionFunction.getPrescription();
res.send(data);
})

app.post('/addPrescriptionData',async(req,res)=>{
 await prescriptionFunction.addPrescription(req.body);
res.json({message:"added"});
})

app.listen(PORT,()=>{
  console.log("Listening to port",PORT);
})

connectTodatabase.connectTodatabase();




// addPrescription();
// prescriptionFunction.getPrescription();



