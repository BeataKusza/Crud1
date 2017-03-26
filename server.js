const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Serwer is up and running on port ${port}`);
});

app.get('/', (req, res) => {
  console.log(_dirname);
  res.sendFile(__dirname + '/index.html')
});
