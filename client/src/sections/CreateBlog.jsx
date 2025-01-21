// import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    const res = await fetch(
      "https://the-debuggers-journal-backend.onrender.com/createBlog",
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
  };
  //   const submitBlog = useQuery({
  //     queryKey: ["blogs"],
  //     queryFn: async () => {
  //       try {
  //         fetch("http://localhost:3000/createBlog", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(blogData),
  //         });
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     },
  //   });
  const handleSubmit = (e) => {
    e.preventDefault();
    sendBlog();
    navigate("/blog");
    console.log("Blog Data:", blogData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Create Blog
        </h2>

        {/* Title Field */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-600 font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={blogData.title}
            onChange={handleChange}
            placeholder="Enter blog title"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            required
          />
        </div>

        {/* Author Field */}
        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-600 font-medium">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={blogData.author}
            onChange={handleChange}
            placeholder="Enter author name"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            required
          />
        </div>

        {/* Content Field */}
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-600 font-medium">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={blogData.content}
            onChange={handleChange}
            placeholder="Write your blog content here"
            rows="6"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            required
          ></textarea>
        </div>

        {/* Keywords Field */}
        <div className="mb-4">
          <label htmlFor="keywords" className="block text-gray-600 font-medium">
            Keywords
          </label>
          <input
            type="text"
            id="keywords"
            name="keywords"
            value={blogData.keywords}
            onChange={handleChange}
            placeholder="Enter keywords (comma-separated)"
            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>

        {/* Date Field */}
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-600 font-medium">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={blogData.date}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-200"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
