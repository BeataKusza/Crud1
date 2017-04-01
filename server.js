const express = require('express');
const bodyPareser = require('body-parser');
const MongoClient = reqiure('mogodb').MongoClient;

const app = express();
const port = 3000;
let db;

console.log('Zmiana');

app.use(bodyParser.urlencoded({encode: true, extended: true}));
db = res;
app.listen(port, () => {
  console.log(`Serwer is up and running on port ${port}`);
});

MongoClient.connect('mongodb://beata23236:beatakusza1@ds147520.mlab.com:47520/mybase', (err,res)=> (
app.get('/', (req, res) => {
  console.log(__dirname);
  res.sendFile(__dirname + '/index.html')
});

app.post('/titles', (req, res) => {
  console.log('Wait for titles');
});
