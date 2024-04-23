import { useEffect, useState } from "react";
import NavMenuBar from "../../Component/NavMenuBar";
import Product from "../../Component/Product";

export default function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((products) => setData(products));
  }, []);

  return (
    <div>
      <NavMenuBar />
      Products
      <div className="mt-10 grid grid-cols-4 gap-4">
        {data.slice(0, 8).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
