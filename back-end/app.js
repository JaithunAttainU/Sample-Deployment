import express from 'express';
import cors from 'cors';


const PORT = process.env.PORT || 4000
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
app.get('/api/products', (req, res) => {
  res.json(allProducts)
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


const allProducts = [
  {
    name: "product1",
    price: 123
  },
  {
    name: "product2",
    price: 444
  }
]