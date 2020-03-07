// ===============================================================================

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
  // ...the JSON is pushed to the appropriate JavaScript array
 
  // ---------------------------------------------------------------------------

  app.post('/api/notes', function(req, res) {
    
    noteCntnt.push(req.body)
    var myJSON = JSON.stringify(noteCntnt);  
    
    fs.writeFileSync('db/db.json', myJSON, 'utf8', function(err) {
      if (err) throw err;
    });
    res.json(true);
  
});
}

