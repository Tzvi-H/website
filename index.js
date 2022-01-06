const express = require('express');
const app = express();
const PORT = 3000;

if (__dirname.slice(-6) === '/public') { // For production
  app.use(express.static(__dirname))
} else { // For development
  app.use(express.static(__dirname + '/public'))
}


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));