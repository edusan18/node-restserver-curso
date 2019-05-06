const express = require('express');
const app = express();

var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })) // Son funciones que se ejecutaran en cada peticion que nosotros hagamos
 
// parse application/json
app.use(bodyParser.json()) // Son funciones que se ejecutaran en cada peticion que nosotros hagamos
 
 
app.get('/', function (req, res) {
  //res.send('Hello World')
  res.json('get Usuario')
})

app.post('/', function (req, res) {

  let body = req.body;

  if (body.nombre === undefined)
  {
    res.status(400).json({
      ok:false,
      mensaje: 'El nombre es necesario'

    })
  }
  else
  {
  //res.send('Hello World')
  res.json({
    persona:body
  })
  }
})

app.put('/usuario/:id', function (req, res) {
  let id = req.params.id;
  res.json({
    id
  })
})

app.delete('/', function (req, res) {
  //res.send('Hello World')
  res.json('delete Usuario')
})
 
app.listen(3000,() => {
console.log('Escuchando puerto: ',3000);
});