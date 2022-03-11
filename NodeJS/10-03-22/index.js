const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/', (req, res) => {
  const body = req.body;

  res.json({
    received_at: new Date().toISOString(),
    "message-from-body": body.message,
  });
});

app.listen(8080);