import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const BlogPage = () => {
  const { data: blogs, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await fetch(
        "https://the-debuggers-journal-backend.onrender.com/api/blogs"
      );
      if (!response.ok) throw new Error("Failed to fetch blogs");
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-600">
        <h1 className="text-5xl text-white font-bold animate-pulse">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-red-400 text-2xl">
        Error fetching blogs. Please try again later.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-600 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl text-white font-bold text-center mb-12 sticky top-[89px] bg-gradient-to-br from-gray-900 to-gray-600 p-10">
          Today's Blogs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {blogs.map((item) => (
            <div
              key={item._id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              <NavLink
                to={`/blog/${item._id}`}
                className="text-2xl font-semibold text-white hover:text-gray-400 transition duration-300 capitalize"
              >
                {item.title.length > 20 ? `${item.title.slice(0, 20)}...` : item.title || "No Title"}
              </NavLink>

              <p className="mt-3 text-gray-300 capitalize">
                {item.content.length > 100 ? `${item.content.slice(0, 100)}...` : item.content || "No Content"}
              </p>

              <NavLink
                to={`/blog/${item._id}`}
                className="text-gray-500 hover:text-gray-300 mt-4 block transition duration-200"
              >
                Read more →
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
