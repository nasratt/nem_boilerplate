const express = require('express');

const app = express();
app.use(express.json());

app.get('/ping', (req, res) => {
  res.status(200);
  res.end('Server is running and can respond to requests!');
});

app.all('*', (req, res) => {
  res.status(404);
  res.end('Page not found!');
});

app.listen(process.env.PORT || 8000, () => {
  console.log(`****** Listening on port ${process.env.PORT || 8000} ******`);
});
