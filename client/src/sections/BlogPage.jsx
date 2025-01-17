import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const BlogPage = () => {
  const [dataBlog, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-600 py-10 ">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl text-white  z-50 font-bold text-center mb-12 sticky top-[89px] bg-gradient-to-br from-gray-900 to-gray-600 p-10">
          Todays Blogs
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {dataBlog.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105"
            >
              {/* Use NavLink with a full path */}
              <NavLink
                to={`/blog/${item.id}`} // Make sure this is the correct path
                className="text-2xl font-semibold text-white hover:text-gray-400 transition duration-300 capitalize"
              >
                {item.title.length > 20
                  ? `${item.title.slice(0, 20)}...`
                  : item.title}
              </NavLink>
              <p className="mt-3 text-gray-300 capitalize">
                {item.body.length > 100
                  ? `${item.body.slice(0, 100)}...`
                  : item.body}
              </p>
              {/* Second NavLink for "Read more" */}
              <NavLink
                to={`/blog/${item.id}`} // Same path for detail view
                className="text-gray-500 hover:text-gray-300 mt-4 block"
              >
                Read more
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
