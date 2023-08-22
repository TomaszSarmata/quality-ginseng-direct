import ProductItem from "./product-item";
import { useEffect, useState } from "react";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await fetch(`/api/products`);
    const data = await res.json();
    setProducts(data);
  };
  return (
    <div>
      <div className="grid grid-cols-3 bg-red-100 gap-4 p-4">
        {products.map((product) => {
          return <ProductItem product={product}></ProductItem>;
        })}
      </div>
    </div>
  );
}
