import { useContext, useState } from "react";
import { images } from "../constants/constant";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../useContext/UseContext";
const LoginPage = () => {
  const { setIsLoggedIn, setCurrentUser } = useContext(MyContext);
  const navigate = useNavigate();
  const [isNameError, setIsNameError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState(false);
  const [success, setsuccess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate name and password
    setIsNameError(name.length < 6);
    setIsPasswordError(password.length < 6);

    // If there is any error, stop further processing
    if (isNameError || isPasswordError) {
      return;
    }

    // If validation passes, handle login
    handleLogin();

    // Clear inputs
    setName("");
    setPassword("");
  };

  const handleLogin = async () => {
    try {
      console.log("Clicked");
      const response = await fetch(
        "https://the-debuggers-journal-backend.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: name, password }),
        }
      );
      const data = await response.json();
      console.log(data);

      setCurrentUser(data.message);

      if (data.message === "Login successful") {
        setsuccess(!success);
        setCurrentUser(data.data.username);
        setIsLoggedIn(true);
        localStorage.setItem("currentUser", data.data.username);
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        seterror(!error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   name.length < 6 ? setIsNameError(!isNameError) : setIsNameError(false);
  //   password.length < 6
  //     ? setIsPasswordError(!isPasswordError)
  //     : setIsPasswordError(false);
  //   if (!isNameError || !isPasswordError) {
  //     return;
  //   }
  //   const newUserData = { username: name, password };
  //   handleLogin(newUserData);
  //   setName("");
  //   setPassword("");
  // };
  // const handleLogin = async (newUserData) => {
  //   const { username, password } = newUserData;
  //   try {
  //     console.log("Clicked");
  //     const response = await fetch("http://localhost:3000/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //     setCurrentUser(data.message);
  //     if (data.message === "Login successful") {
  //       setsuccess(!success);
  //       setCurrentUser(data.data.username);
  //       setTimeout(() => {
  //         navigate("/");
  //       }, 2000);
  //     } else {
  //       seterror(!error);
  //     }
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  return (
    <>
      <h1 className="text-4xl font-mono flex justify-center items-center mt-10 ">
        Welcome to the {"  "}
        <span className="ml-2 text-white font-bold bg-blue-900 p-2 rounded-lg shadow-xl">
          Login Page
        </span>
      </h1>
      <div className="w-full flex justify-center items-center ">
        <div>
          <img src={images.login} alt="login" className="w-[500px]" />
        </div>

        <div className=" w-1/2 h-[500px] flex justify-center items-center flex-col">
          <form
            className="flex flex-col w-1/2"
            onSubmit={(e) => handleSubmit(e)}
          >
            <label htmlFor="email" className="font-semibold pb-2">
              Email/Username:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email or Username"
              autoComplete="false"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 border border-gray-300 rounded-md outline-none text-gray-500"
            />
            {isNameError && (
              <p className="text-red-500 font-bold text-sm">
                Username must be at least 6 characters
              </p>
            )}
            <br />
            <label htmlFor="password" className="font-semibold pb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="p-2 border border-gray-300 rounded-md outline-none"
            />
            {isPasswordError && (
              <p className="text-red-500 font-bold text-sm">
                Password must be at least 6 characters
              </p>
            )}
            <br />
            {error && (
              <p className="font-semibold text-sm text-red-600">
                Invalid username or password
              </p>
            )}
            {success && (
              <p className="font-semibold text-sm text-green-600">
                Login successful
              </p>
            )}
            <br />
            <button
              type="submit"
              className="bg-blue-900 px-4 py-2 text-white rounded-md hover:bg-blue-800 font-mono"
            >
              Login
            </button>
          </form>
          <button
            type="submit"
            className=" px-4 py-2 text-black rounded-md font-mono"
          >
            Forget Password?
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
