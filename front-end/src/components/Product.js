import { useState } from "react"


function Product() {

  const [productArray, setProductArray] = useState([])

  const getAllProducts = async () => {
    const response = await fetch('/api/products')
    const productData = await response.json()
    setProductArray(productData)
  }

  return (
    <div>
      <h1>Product Route Working</h1>
      <button onClick={getAllProducts}>Get Products</button>

      <ul>
        {
          productArray.map(p => <li key={p.name}>{p.name} --- {p.price}</li>)
        }
      </ul>
    </div>
  )
}

export default Product