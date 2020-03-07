// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  
//  app.get('/', (req, res) => {
//    res.send('<h1>This is Notetaker!</h1>')
//  })

  app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html")); //__dirname 
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
