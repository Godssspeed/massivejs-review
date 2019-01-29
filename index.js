require("dotenv").config();
const express = require('express');
const app = express();
const { json} = require('body-parser');
const massive = require('massive');
const { getBands, addBand, updateBand, deleteBand } = require("./controller");

app.use(json());

massive(process.env.CONNECTION_STRING)
  .then(db => app.set('db', db))
  .catch(err => console.log(err));

app.get("/api/bands", getBands);
app.post('/api/bands', addBand);
app.put('/api/bands/:id', updateBand);
app.delete('/api/bands/:id', deleteBand);

app.listen(3001, () => console.log('Listening on port 3001'))