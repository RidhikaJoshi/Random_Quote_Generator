const express = require('express')
const app = express()
const port = 8000
const fs = require('fs')

app.get('/', (req, res) => {
    res.end('Hello Ridhika!');
});
app.get("/quotes", (req, res) => {
    res. setHeader("Access-Control-Allow-Origin", "*");
    fs.readFile(__dirname + '/' + 'quotes.js', (err, data) => {
        res.end(data);
    });
});
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });
 