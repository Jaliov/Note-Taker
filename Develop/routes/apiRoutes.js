const noteCntnt  = require('../db/db.json');
const fs = require('fs');

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
 
  app.get('/api/notes', (req, res) => {//GET NOTES!!!
    res.json(noteCntnt)
  });

  
  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)

   
  app.post('/api/notes', function(req, res) {
    req.body.id = req.body.title; 
    noteCntnt.push(req.body)
    console.log(req.body, noteCntnt)
    var newJSON = JSON.stringify(noteCntnt);  
    
    fs.writeFileSync('db/db.json', newJSON, 'utf8', function(err) {
      if (err) throw err;
    });
    res.json(true);
  
});

app.delete('/api/notes/:id', function(req, res) { 
  console.log(req.params.id)
  var newNoteCntnt = noteCntnt.filter(note => 
     note.id != req.params.id
   ) 
  console.log(newNoteCntnt)
  var newJSON = JSON.stringify(newNoteCntnt);  
  fs.writeFileSync('db/db.json', newJSON, 'utf8', function(err) {
    if (err) throw err;
  });
  res.json(true);
});
}


