import { useState } from 'react'

export default function ProductDetails() {
  const [product, setProduct] = useState({})

  return (
    <div>
      Back home
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <img src={product.image} width='100' />
        </div>
      )}
    </div>
  )
}
