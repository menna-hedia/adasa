import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6 text-center">
      <h1 className="text-5xl font-bold text-white mb-4">Adasa</h1>
      <p className="text-lg text-gray-600 mb-6">Welcome to Photography Blog</p>
      <Link
        to="/blog"
        className="px-6 py-3 bg-orange-500 text-white rounded-2xl font-medium hover:bg-orange-600 transition"
      >
        Go to Blogs
      </Link>
    </div>
  );
}