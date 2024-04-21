import { useParams } from "react-router-dom";

export default function SinglePost() {
  const params = useParams();
  const { id } = params;
  console.log(params);
  return <div>SinglePost: {id}</div>;
}
