import { useState } from "react";
import blogsData from "../../posts.json";
import { Link } from "react-router-dom";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;

  const blogs = blogsData.posts;
  const categories = blogsData.categories;

  const filteredBlogs = blogs.filter(
    (blog) =>
      (blog.title.toLowerCase().includes(search.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(search.toLowerCase())) &&
      (category === "all" || blog.category === category)
  );

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, startIndex + blogsPerPage);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-white">Blog</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center">
        <input
          type="text"
          placeholder="Search..."
          className="bg-white w-full md:w-1/3 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />
        <select
          className="px-4 py-2 bg-white border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
          onChange={(e) => {
            setCategory(e.target.value);
            setCurrentPage(1);
          }}>
          <option value="all">All</option>
          {categories.map((cat) => (
            <option key={cat.name} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
        <div className="flex gap-2">
          <button
            onClick={() => setView("grid")}
            className={`px-4 py-2 rounded-xl ${
              view === "grid" ? "bg-orange-500 text-white" : "bg-gray-200"
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => setView("list")}
            className={`px-4 py-2 rounded-xl ${
              view === "list" ? "bg-orange-500 text-white" : "bg-gray-200"
            }`}
          >
            List
          </button>
        </div>
      </div>

      <div
        className={
          view === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            : "flex flex-col gap-6"
        }
      >
        {currentBlogs.map((blog) => (
          <div
            key={blog.id}
            className={`bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 ${
              view === "list" ? "flex gap-4 mx-auto w-300" : ""
            }`}
          >
            <img
              src={blog.image}
              alt=""
              className={`${
                view === "list"
                  ? "w-100 h-full object-cover"
                  : "w-full h-48 object-cover"
              }`}
            />

            <div className="p-4 flex flex-col justify-between">
              <div>
                <span className="text-sm text-orange-500 font-semibold">
                  {blog.category}
                </span>

                <h3 className="text-lg font-bold mt-2 text-gray-800 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>

              <Link
                to={`/blog/${blog.id}`}
                className="mx-auto w-80 mt-4 inline-block text-center bg-orange-500 text-white px-4 py-2 rounded-xl hover:bg-orange-600 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-3 py-1 rounded ${
              currentPage === page ? "bg-orange-500 text-white" : "bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}