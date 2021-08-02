const Express = require("express");

const app = Express();
const morgan = require("morgan");
const port = 3000;

//middleware
app.use(Express.json());
app.use(morgan("tiny"));

//for local variables in .env
//if you don't have my .env uncomment the next line
//const api = '/api/v1'
require("dotenv/config");
const api = process.env.API_URL;

app.get(`${api}/products`, (req, res) => {
  const Products = {
    id: 1,
    name: "hair dresser",
    image: "image url",
  };
  res.send(Products);
});

app.post(`${api}/products`, (req, res) => {
  const newProduct = req.body;
  console.log(newProduct);
  res.send(newProduct);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
