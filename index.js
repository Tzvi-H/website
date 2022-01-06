const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.get('/test', (_, res) => res.send('test received'));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));