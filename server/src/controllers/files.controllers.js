const sql = require('better-sqlite3');
const fs = require('fs')
const path = require('path')

const db = sql('../../filestore.db')


db.prepare(`
    CREATE TABLE IF NOT EXISTS files (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT,
    title TEXT
    )
    `).run();


function insertFileRecord(req,res){
   // console.log(req.body.slug, req.body.title)
const insertData = db.prepare("INSERT INTO files (slug, title) VALUES (?, ?)")
const insertedId = insertData.run(req.body.slug,req.body.title)
res.json({insertedId});
}

function insertFileRecordLocal(url,title){

const insertData = db.prepare("INSERT INTO files (slug, title) VALUES (?, ?)")
insertData.run(url,title)

}


function deletFileRecord(req, res){
    const id = req.params.id;

    const result = db.prepare(`SELECT title FROM files WHERE id=${id}`).all()
   

    fs.unlink(path.join(__dirname,'..','public/files',result[0].title),(err)=>{
        if(err)console.log(err)
      
          console.log("File deleted successfully")
      })

 // deleting file record   
const insertData = db.prepare(`DELETE FROM files WHERE id=${id}`)
let deleteId = insertData.run()
res.send("deleteId")
}


function fetchFileList(req, res){
const query = "SELECT * FROM files ORDER BY id DESC"
const fileList = db.prepare(query).all()
// db.close();
//console.log(fileList)
res.json(fileList);
}





module.exports ={
    insertFileRecord,
    fetchFileList,
    insertFileRecordLocal,
    deletFileRecord,
  
}