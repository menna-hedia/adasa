import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 p-5 rounded-xl">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold text-orange-500">
          Adasa
        </Link>

        <div className="flex gap-10 font-medium text-gray-700">
          <Link to="/" className="hover:text-orange-500 transition">Home</Link>
          <Link to="/blog" className="hover:text-orange-500 transition">Blog</Link>
          <Link to="/about" className="hover:text-orange-500 transition">About</Link>
          <Link to="/contact" className="hover:text-orange-500 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}