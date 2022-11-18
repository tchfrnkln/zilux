const express = require('express')
const multer = require('multer')
const mysql = require('mysql')
const bodyParser = require('body-parser')



const upload = multer({ storage: multer.memoryStorage()})
 
var router = express.Router()
const app = express()
const port = process.env.PORT || 5175

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


// create sql connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database:"zilux"
})





app.post("/upload", upload.single('avt'), (req, res) => {
  // res.send(req.file.buffer.toString('base64'))
  res.send(req.file)
})






app.listen(port,()=> console.log(`listening on port ${port}`))