import { RouterProvider } from "react-router-dom";
import { router } from "./sections/router/route";
import { MyContext } from "./useContext/UseContext";
import { useState, useEffect } from "react";

const App = () => {
  const [currentUser, setCurrentUser] = useState("Guest");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  // Retrieve data from localStorage on page load
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    const storedLoginStatus = localStorage.getItem("isLoggedIn");
    const storedAvatarStatus = localStorage.getItem("avatar");
    const storedCoverStatus = localStorage.getItem("coverImage");
    if (
      storedUser &&
      storedLoginStatus &&
      storedAvatarStatus &&
      storedCoverStatus
    ) {
      setCurrentUser(storedUser);
      setIsLoggedIn(JSON.parse(storedLoginStatus));
      setAvatar(storedAvatarStatus);
      setCoverImage(storedCoverStatus);
    }
  }, []);

  return (
    <MyContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        isLoggedIn,
        setIsLoggedIn,
        avatar,
        setAvatar,
        coverImage,
        setCoverImage,
      }}
    >
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
};

export default App;
