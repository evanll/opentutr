const express = require('express');
const app = express();

// To get the port from Heroku or 5000 if in dev
const PORT = process.env.PORT || 5000;
app.listen(PORT);
