require('dotenv').config();
const weather = require('weather-js');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use('/css', express.static(`${process.cwd()}/css`));
app.use(express.json()) 
app.use(express.urlencoded({ extended: false }))
app.get('/', (req, res) => {res.sendFile(process.cwd() + '/html/index.html')});
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/weather',(req,res)=>{
   var loc= req.body.location;
weather.find({search: loc, degreeType: 'C'}, function(err, result) {
  if(err) res.send(err);

  res.send(result);
});})

const port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log(`Listening on port ${port}`);
  });