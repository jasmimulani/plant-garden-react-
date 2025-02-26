require('dotenv').config();
const  express = require("express")
const app = express();
const mongoose = require("mongoose")
const morgan = require("morgan")
const port = process.env.PORT;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    res.send('welcome to server')
})

    app.listen(port, () =>{
        mongoose
        .connect(process.env.MONGO_URL)
        .then(() =>{
            console.log("database connected sucess...");
        })
        .catch((err) => console.log(err));
        console.log(`server start at http://localhost:${port}`);
        
    })
    