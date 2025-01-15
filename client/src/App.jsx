import { RouterProvider } from "react-router-dom";
import { router } from "./router/route";
import { MyContext } from "./useContext/UseContext";
import { useState } from "react";

const App = () => {
  const [globalData, setGlobalData] = useState([
    {
      id: 1,
      name: "Rajat",
    },
    {
      id: 2,
      name: "Rajat",
    },
    {
      id: 3,
      name: "Rajat",
    },
  ]);
  console.log("from app", globalData);
  return (
    <MyContext.Provider value={{ globalData, setGlobalData }}>
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
};

export default App;
