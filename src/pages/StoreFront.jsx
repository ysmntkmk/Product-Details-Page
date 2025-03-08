import { useEffect, useState } from 'react'
import Product from './Product'
import Loader from './Loader'
import useFetch from '../utilities/useFetch'

export default function StoreFront() {
  const [products, setProducts] = useState([])
  const { get, loading } = useFetch(
    'https://router-12f10-default-rtdb.europe-west1.firebasedatabase.app/'
  )
  useEffect(() => {
    get("products.json")
      .then((data) => setProducts(data))
      .catch((error) => console.error("Ürünler yüklenirken hata oluştu:", error));
  }, []);

  return (
    <div className='store-front'>
      {loading && <Loader />}
      {products.map((product) => (
        <Product key={product.id} details={product} />
      ))}
    </div>
  )
}
