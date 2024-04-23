import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Product({ product }) {
  const navigate = useNavigate();
  const handleClick = (id) => {
    console.log(id);
    navigate(`/product/${id}`);
  };
  return (
    <div className="border rounded p-2 bg-white">
      <img
        src={product.image}
        alt=""
        onClick={() => handleClick(product.id)}
        className="w-96 h-96 object-cover ml-auto border rounded-lg"
      />
      <h2 className="font-medium text-gray-800">{product.title}</h2>
      <p className="font-medium text-gray-500"> ${product.price}</p>
      <p className="font-medium text-gray-400">
        {product.rating.rate} ({product.rating.count})
      </p>
      <p></p>
    </div>
  );
}
