import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://the-debuggers-journal-backend.onrender.com/blogs"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const datas = await response.json();
        console.log("data is ", datas);
        setData(datas.find((item) => item._id === id));
        console.log("data is again", data);
        // setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  //show date

  console.log(Date());
  return (
    <div className="p-4 bg-slate-600 h-screen">
      <h1 className="text-3xl font-bold">Blog {id}</h1>
      {/* Display the fetched blog data */}
      <div className="flex flex-col gap-2">
        <div className="mt-4 text-4xl capitalize font-bold ">
          {data && data.title}
        </div>
        <div className="flex gap-2">
          <p className="text-gray-400">Reading at</p>
          {Date()}
        </div>
      </div>
      <div
        className="mt-4
      capitalize text-2xl font-bold"
      >
        {data && data.content}
      </div>
    </div>
  );
};

export default BlogDetails;
