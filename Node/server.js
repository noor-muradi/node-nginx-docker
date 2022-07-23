const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('<h1><center>Nodejs app1 workig !<center></h1>');
});



app.listen(5000, () => {
  console.log('App listening on port 5000!');


});