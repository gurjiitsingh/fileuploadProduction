const express = require("express");
const listRoute = express.Router();


const { fetchFileList, insertFileRecord, deletFileRecord } = require("../controllers/files.controllers.js");
listRoute.post('/',insertFileRecord)
listRoute.route('/').get(fetchFileList,(req, res, next)=>{console.log("in middle"); next()})
listRoute.route('/:id').delete(deletFileRecord)



module.exports = {
    listRoute,

}