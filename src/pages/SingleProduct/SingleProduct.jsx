import { useParams } from "react-router-dom";
import NavMenuBar from "../../Component/NavMenuBar";
import { useEffect, useState } from "react";

export default function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((data) => setSingleProduct(data));
  }, []);

  console.log(singleProduct);
  return (
    <div>
      <NavMenuBar />
      <div>
        <div className="grid grid-cols-2 gap-4">
          <img
            className="w-96 h-96 object-cover ml-auto border rounded-lg"
            src={singleProduct.image}
            alt=""
          />
          <div className="flex  items-center">
            <div>
              <p className="font-bold text-4xl">{singleProduct.price}</p>
              <h1 className="font-semibold text-2xl">{singleProduct.title}</h1>
              <p className="font-medium text-lg text-gray-400">
                {singleProduct.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
