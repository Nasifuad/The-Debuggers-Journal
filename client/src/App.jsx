import { RouterProvider } from "react-router-dom";
import { router } from "./router/route";
import { MyContext } from "./useContext/UseContext";
import { useState } from "react";

const App = () => {
  const [currentUser, setCurrentUser] = useState("Guest123");
  return (
    <MyContext.Provider value={{ currentUser, setCurrentUser }}>
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
};

export default App;
