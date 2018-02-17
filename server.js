const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, function(){
  console.log('server started on port 3000')
});


app.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});