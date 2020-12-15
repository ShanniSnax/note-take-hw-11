const uuid = require("uuid");
const util = require("util");
const fs = require("fs");

const readFileAsync = util.promisify(fs.readfile);
const writeFileAsync = util.promisify(fs.writefile);


module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    // readFileAsync("./db/db.json", "utf8").then(notes => {
    //     let noteParse; 
    //     try {noteParse = [].concat(json.parse(notes))}
    //     catch {noteParse = []};
    //     console.log(noteParse);
    //     return(noteParse);
    // }).then(noteParse => {
    //     res.json(noteParse);

    // })
  });


  app.post("/api/notes", function(req, res) {
  });


  app.delete("/api/notes/:id", function(req, res) {



    // res.json({ ok: true });
  });
};
