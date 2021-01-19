const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public'))); 

app.get('/', (req, res) => {
  res.render('index.html');
})

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('running on port', port);
});
