import { useEffect, useState } from "react";

export default function SingleProduct() {
  const [singleBook, setSingleBook] = useState("not rendered");

  useEffect(() => {
    getSingleProduct();
  });

  const getSingleProduct = async () => {
    const res = await fetch(`/api/books`);
    const data = await res.json();
    setSingleBook(data);
  };
  return <div>Single Product</div>;
}
