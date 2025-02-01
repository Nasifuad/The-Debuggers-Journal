import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const BlogPage = () => {
  const {
    data: blogs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await fetch(
        "https://the-debuggers-journal-backend.onrender.com/api/blogs"
      );
      if (!response.ok) throw new Error("Failed to fetch blogs");
      // const data = await response.json();
      // setBlogs(data);
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="w-24 h-24 border-4 border-white/20 border-t-blue-400 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-blue-200 animate-pulse">
        <div className="text-red-300 text-xl p-8 border border-red-300/30 rounded-lg backdrop-blur-sm">
          ⚠️ Error fetching blogs. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className=" bg-gradient-to-br  from-blue-900 via-gray-900 to-sky-600 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 animate-text-shine sticky top-10 z-10 py-8 backdrop-blur-lg hidden xl:block">
          The Debuggers Journal
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {blogs.map((item, index) => (
            <div
              key={item._id}
              className="group relative overflow-hidden rounded-2xl bg-gray-800/30 backdrop-blur-lg border border-white/10 hover:border-blue-400/30 transition-all duration-300 ease-out hover:shadow-2xl hover:-translate-y-2"
              style={{
                animation: `cardEntrance ${
                  500 + index * 100
                }ms ease-out forwards`,
                opacity: 0,
                transform: "translateY(20px)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <NavLink
                to={`/blog/${item._id}`}
                className="flex flex-col h-full p-6"
              >
                <h3 className="text-2xl font-semibold text-gray-100 mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {item.title || "Untitled Journey"}
                  <span className="absolute inset-0 z-10"></span>
                </h3>

                <div className="relative flex-1">
                  <p className="text-gray-400/80 text-lg leading-relaxed line-clamp-3 group-hover:line-clamp-5 transition-all duration-500">
                    {item.content || "Let's explore the unknown together..."}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-800/90 via-gray-800/30 to-transparent group-hover:opacity-0 transition-opacity duration-300"></div>
                </div>

                <div className="mt-6 flex items-center text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                  <span className="mr-2">Continue Reading</span>
                  <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes cardEntrance {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes textShine {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        .animate-text-shine {
          background-size: 200% auto;
          animation: textShine 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default BlogPage;
