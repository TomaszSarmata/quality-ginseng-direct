export default function ({ product }) {
  return (
    <div className="flex flex-col bg-blue-100">
      <div>{product.title}</div>
      <div>{product.subtitle}</div>
      <div>Price: {product.price}</div>
    </div>
  );
}
