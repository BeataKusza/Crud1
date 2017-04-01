const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;
let db;

console.log('Zmiana');

app.use(bodyParser.urlencoded({encode: true, extended: true}));


MongoClient.connect('mongodb://test123:123qwe@ds147520.mlab.com:47520/mybase', (err,res)=> {
  if(err) {
    return console.error(err)
  }
  db = res;
  app.listen(port, () => {
    console.log(`Serwer is up and running on port ${port}`);
  });
});

app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + '/index.html')
});

app.post('/titles', (req, res) => {
  db.collections('book').save(req.body, (err, result) => {
    console.log(req.body);
    if(err) {
      return console.error(err)
    }

    console.log.info('Saved to database');
    res.rederict('/');
  })
});
