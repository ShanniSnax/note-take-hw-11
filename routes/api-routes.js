const uuid = require("uuid");
const util = require("util");
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    readFileAsync("./db/db.json", "utf8").then(notes => {
        let noteParse; 
        try {noteParse = JSON.parse(notes)}
        catch {noteParse = []};
        res.json(noteParse);
    });
  });


  app.post("/api/notes", function(req, res) {
    readFileAsync("./db/db.json", "utf8").then(notes => {
        let noteParse; 
        let noteId = uuid.v4();
        // console.log(noteId);
        try {noteParse = JSON.parse(notes)}
        catch {noteParse = []};
        newNote = {
          id: noteId, 
          title: req.body.title, 
          text: req.body.text 
        };
        noteParse.push(newNote)
        // console.log(noteParse)
    writeFileAsync("./db/db.json", JSON.stringify(noteParse))

    res.json({ ok: true });
    });
  });


  app.delete("/api/notes/:id", function(req, res) {
    readFileAsync("./db/db.json", "utf8").then(notes => {
      let noteParse; 
      try {noteParse = JSON.parse(notes)}
      catch {noteParse = []};
      currentNote = req.params.id;
      newNoteArray = [];
      for (i = 0; i <noteParse.length; i++) {
        if (currentNote === noteParse[i].id) {
          console.log(noteParse[i])
        }
        else {
          newNoteArray.push(noteParse[i])
        }
      }
      writeFileAsync("./db/db.json", JSON.stringify(newNoteArray))

    res.json({ ok: true });
  });

});


};
