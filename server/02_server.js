const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
  //res.send('Hello World')
  res.json('get Usuario')
})

app.post('/', function (req, res) {
  //res.send('Hello World')
  res.json('post Usuario')
})

app.put('/', function (req, res) {
  //res.send('Hello World')
  res.json('put Usuario')
})

app.delete('/', function (req, res) {
  //res.send('Hello World')
  res.json('delete Usuario')
})
 
app.listen(3000,() => {
console.log('Escuchando puerto: ',3000);
});