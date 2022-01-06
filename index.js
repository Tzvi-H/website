const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use('*', (req, res) => {
  res.send('hello')
})

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));