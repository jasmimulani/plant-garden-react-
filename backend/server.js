require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const port = process.env.PORT;
const cors = require("cors");
const EmployeeModel = require("./model/employee");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/', (req,res)=>{
//     res.send('welcome to server')
// })

app.post("/signup", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.passwoed === password) {
        res.json("success");
      } else {
        res.json("password is incorerct");
      }
    }else{
        res.json("no record exist")
    }
  });
});

app.listen(port, () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("database connected sucess...");
    })
    .catch((err) => console.log(err));
  console.log(`server start at http://localhost:${port}`);
});
