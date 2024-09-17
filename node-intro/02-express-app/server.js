import * as http from 'node:http';
import express from 'express'

const app = express();

const products = [
  { id: 100, name: "Pen", cost: 10 },
  { id: 101, name: "Pencil", cost: 5 },
  { id: 102, name: "Marker", cost: 50 },
];

// json parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true })); 

// log middleware
app.use(function(req, res, next){
    console.log(`[log] : ${req.method} - ${req.url}`);
    next()
})

app.get("/products", function(req, res, next){
    // res.write(JSON.stringify(products));
    // res.end();

    // using querystrings
    const sortBy = req.query.sort;
    const desc = req.query.desc;
    if (sortBy){
        if (desc && desc === 'true'){
            products.sort((p1, p2) => p2[sortBy] - p1[sortBy]);
        } else {
            products.sort((p1, p2) => p1[sortBy] - p2[sortBy]);
        }
        res.json(products)
        return
    }
    res.json(products)
})

app.get("/products/:id", function (req, res, next) {
  const id = parseInt(req.params.id)
  const product = products.find(p => p.id === id);
  if (product){
    res.json(product)
  } else {
    res.status(404).end();
  }
});

app.post('/products', function(req, res, next){
    const newProduct = req.body;
    products.push(newProduct)
    res.status(201).json(newProduct);
})

const server = http.createServer(app);
server.listen(8080);