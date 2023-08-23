export default function ProductItem({ product }) {
  return (
    <div className="flex flex-col bg-white text-center p-4 rounded-md">
      <a href={`/single-product/${product.id}`}>
        <img src={product.imgUrl} alt="" />
        <h2 className="text-2xl">{product.title}</h2>
        <h3>{product.subtitle}</h3>
        <h3>Price: {product.price}</h3>
      </a>
    </div>
  );
}
