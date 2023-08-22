import products from "components/products/product-grid/products";
import ProductItem from "./product-item";

export default function ProductGrid() {
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
