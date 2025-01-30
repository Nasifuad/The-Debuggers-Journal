import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState({
    title: "",
    author: "",
    keywords: "",
    content: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...blogData, [name]: value });
  };

  const sendBlog = async () => {
    try {
      const res = await fetch(
        "https://the-debuggers-journal-backend.onrender.com/api/createBlog",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blogData),
        }
      );
      const result = await res.json();
      console.log("result from server is ", result);
      setBlogData({
        title: "",
        author: "",
        keywords: "",
        content: "",
        date: "",
      });
      navigate("/blog");
    } catch (error) {
      console.error("Error submitting blog:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendBlog();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white/10"
      >
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-8 text-center">
          Craft New Journey
        </h2>

        <div className="space-y-6">
          {/* Title Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={blogData.title}
              onChange={handleChange}
              placeholder="Enter blog title"
              className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-100 placeholder-gray-400 transition-all"
              required
            />
          </div>

          {/* Author Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Author
            </label>
            <input
              type="text"
              name="author"
              value={blogData.author}
              onChange={handleChange}
              placeholder="Enter author name"
              className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-100 placeholder-gray-400 transition-all"
              required
            />
          </div>

          {/* Content Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Content
            </label>
            <textarea
              name="content"
              value={blogData.content}
              onChange={handleChange}
              placeholder="Write your blog content here"
              rows="8"
              className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-100 placeholder-gray-400 transition-all"
              required
            ></textarea>
          </div>

          {/* Keywords Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Keywords
            </label>
            <input
              type="text"
              name="keywords"
              value={blogData.keywords}
              onChange={handleChange}
              placeholder="Enter keywords (comma-separated)"
              className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-100 placeholder-gray-400 transition-all"
            />
          </div>

          {/* Date Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={blogData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-100 [color-scheme:dark]"
              required
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Publish Entry
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
};

export default CreateBlog;
