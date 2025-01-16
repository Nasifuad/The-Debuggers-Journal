import { RouterProvider } from "react-router-dom";
import { router } from "./router/route";
import { MyContext } from "./useContext/UseContext";
import { useState, useEffect } from "react";

const App = () => {
  const [currentUser, setCurrentUser] = useState("Guest");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Retrieve data from localStorage on page load
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    const storedLoginStatus = localStorage.getItem("isLoggedIn");

    if (storedUser && storedLoginStatus) {
      setCurrentUser(storedUser);
      setIsLoggedIn(JSON.parse(storedLoginStatus));
    }
  }, []);

  return (
    <MyContext.Provider
      value={{ currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn }}
    >
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
};

export default App;
