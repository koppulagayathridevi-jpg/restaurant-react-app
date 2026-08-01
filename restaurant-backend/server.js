
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


// images
// app.use(
//  "/uploads",
//  express.static(path.join(__dirname,"uploads"))
// );
app.use("/uploads", express.static("uploads"));


// food route
app.use("/api/foods", require("./routes/foodRoutes"));


mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
 console.log("MongoDB Connected");
})
.catch(err=>{
 console.log(err);
});


// app.listen(5000,()=>{
//  console.log("Server running on port 5000");
// });
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});