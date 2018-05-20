const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

//authentication
const userAuthRoutes = require("./routes/userAuth");
userAuthRoutes(app);
//or require("./routes/userAuth")(app)
//authentication

if (process.env.NODE_ENV === 'production') {
  // express will send production files if the route is recognized 
  app.use(express.static('client/build'));

  // else it will serve the index.html file
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
// To get the port from Heroku or 5000 if in dev
const PORT = process.env.PORT || 5000;
app.listen(PORT);
