import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../utilities/useFetch";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { get, loading } = useFetch(
    "https://router-12f10-default-rtdb.europe-west1.firebasedatabase.app/"
  );

  useEffect(() => {
    get(`productdetails/id${id}.json`)
      .then((data) => setProduct(data))
      .catch((error) => console.error("Ürün detayları yüklenirken hata oluştu:", error));
  }, [id]);

  return (
    <div>
      <Link to="/">Back home</Link>
      {loading && <p>Loading...</p>}
      {product && (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <img src={product.image} width="100" alt={product.name} />
        </div>
      )}
    </div>
  );
}