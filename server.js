const express = require('express');
const app = express();
const port = 3000;

app.listen(port, function () => {
  console.log('Serwer is up and running on port ${port}');
});
