const express = require('express');
const app = express();
const path = required('path');

app.listen(3000, function(){
  console.log('server started on port 3000')
});

res.sendFile(path.resolve('index.html'));
// app.get('/', (req, res) => {
//   res.sendFile('/Users/Mc Anderson/Desktop/GENERAL/GIT-REPOS/CRUD ' + 'index.html')
// });