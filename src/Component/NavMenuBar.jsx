import { Link } from "react-router-dom";

export default function NavMenuBar() {
  return (
    <div>
      <div className="flex gap-4 border-b container mx-auto py-4">
        <Link className="font-semibold text-gray-700" to="/">
          Home
        </Link>
        <Link className="font-semibold text-gray-700" to="/dashboard">
          Dashboard
        </Link>
        <Link className="font-semibold text-gray-700" to="/user">
          User
        </Link>
        <Link className="font-semibold text-gray-700" to="/dashboard/post">
          Post
        </Link>
        <Link className="font-semibold text-gray-700" to="/products">
          Products
        </Link>
      </div>
    </div>
  );
}
