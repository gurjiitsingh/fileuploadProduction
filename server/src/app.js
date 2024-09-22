const express = require('express')
const  multer = require('multer');
const bodyParser = require('body-parser')
const path = require('path');
const fs = require('fs')
const cors = require('cors'); 
//const fileURLToPath = require('url');

const app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'))


const { multerImageRouter } = require("./routes/multerImageUpload.routes");
//import multerImageRouter  from './routes/multerImageUpload.routes.js'
app.use('/upload', multerImageRouter)



// list all files
const { listRoute } = require('./routes/list.routes.js')
app.use('/files',listRoute)


// Front end
app.use('/l',(req,res)=>{
  res.sendFile(path.join(__dirname,'..','public','build/server/app/index.html'))
})
 app.get('/',(req, res)=>{
      res.send("App is working")
  })



module.exports = {
  app,
};


// app.use('/link',express.static('./public/files'))
// app.use('/uploads', express.static('./uploads')) // file path
// app.use('/link1',express.static('../public/files'))
