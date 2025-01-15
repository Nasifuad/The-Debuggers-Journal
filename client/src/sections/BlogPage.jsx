import { useState, useEffect } from "react";

const BlogPage = () => {
  const [dataBlog, setdata] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setdata(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchdata();
  }, []);

  return (
    <center className=" bg-slate-600 h-screen ">
      <h1 className="mt-10 font-semi-bold text-3xl">Blog Page</h1>
      <div className="mt-10 flex    flex-col justify-start items-start ">
        {dataBlog.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </center>
  );
};

export default BlogPage;
