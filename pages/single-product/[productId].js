import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState(null);
  const router = useRouter();
  const productId = router.query.productId;

  useEffect(() => {
    if (!productId) return;
    getSingleProduct(productId);
  }, [productId]);

  const getSingleProduct = async (id) => {
    const res = await fetch(`/api/product-by-id?id=${id}`);
    const data = await res.json();
    const { product } = data;
    setSingleProduct(product);
  };
  console.log(singleProduct);

  if (!singleProduct) {
    return <div>loading...</div>;
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h1 className="text-4xl my-6 p-4">
        {singleProduct.title} - {singleProduct.subtitle}
        <br></br>
        <span className="text-xl text-gray-700 font-light">
          Size: {singleProduct.size}
        </span>
      </h1>
      <div className="w-full flex flex-row gap-x-2">
        <div className="w-5/12  p-4">
          <img src={singleProduct.imgUrl} alt="" />
        </div>
        <div className="w-7/12  p-4 flex flex-row gap-x-4">
          <div className="w-6/12 p-4 ">
            <div className="text-xl font-bold">{singleProduct.title}</div>
            <div>{singleProduct.description}</div>
          </div>
          <div className="w-6/12 p-4 ">
            <div className="text-xl font-bold">Benefits</div>
            <div>
              <ul className="list-disc">
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit
                </li>
                <li>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
