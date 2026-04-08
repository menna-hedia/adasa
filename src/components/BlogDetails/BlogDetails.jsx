import { useParams } from "react-router-dom";
import blogsData from "../../posts.json";

export default function BlogDetails() {
  const { id } = useParams();

  const blog = blogsData.posts.find((b) => b.id === Number(id));

  if (!blog) return <h2 className="text-2xl font-bold text-center mt-10">Not Found</h2>;

  return (
    <div className="p-6 max-w-4xl mx-auto mt-10 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">{blog.title}</h2>
      <span className="text-sm text-orange-500 font-semibold mb-4 inline-block">
        {blog.category}
      </span>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-96 object-cover rounded-xl mb-6"
      />
      <p className="text-gray-700 text-lg mb-4">{blog.description}</p>
      <p className="text-gray-900 text-sm">
        {blog.content}
      </p>
    </div>
  );
}