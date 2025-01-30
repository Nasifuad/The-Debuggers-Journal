import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const naviogate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://the-debuggers-journal-backend.onrender.com/api/blogs"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch blog data");
        }
        const blogs = await response.json();
        const blog = blogs.find((item) => item._id === id);
        if (!blog) {
          throw new Error("Blog not found");
        }
        setData(blog);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700">
        <div className="w-12 h-12 border-4 border-gray-400 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700">
        <div className="text-red-400 text-xl p-6 border border-red-400/30 rounded-lg backdrop-blur-sm">
          ⚠️ {error}
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1
          className="underline cursor-pointer text-xl font-bold mb-8"
          onClick={() => naviogate("/blog")}
        >
          Back to Blogs{" "}
        </h1>
        <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          {data?.title || "Untitled Blog"}
        </h1>

        <div className="flex items-center gap-4 text-gray-400 mb-8">
          <span>Published on:</span>
          <span className="font-semibold text-gray-300">
            {formatDate(Date())}
          </span>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300 leading-relaxed">
            {data?.content || "No content available."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
