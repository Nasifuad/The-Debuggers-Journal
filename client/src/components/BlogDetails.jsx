import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);
  const [time, setTime] = useState();
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString());
      console.log("time", new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  });
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
          {time}
        </div>
      </div>
      <div
        className="mt-4
      capitalize text-2xl font-bold"
      >
        {data && data.body}
      </div>
    </div>
  );
};

export default BlogDetails;
