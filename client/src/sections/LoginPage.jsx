import { useState } from "react";
import { images } from "../constants/constant";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const [isNameError, setIsNameError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState(false);
  const [success, setsuccess] = useState(false);

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    name.length < 6 ? setIsNameError(true) : setIsNameError(false);
    password.length < 6 ? setIsPasswordError(true) : setIsPasswordError(false);

    handleLogin();
    setName("");
    setPassword("");
  };
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: name, password }),
      });
      const data = await response.json();
      if (data.message === "Login successful") {
        setsuccess(!success);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        seterror(!error);
      }
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
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
              onChange={(e) => handleNameChange(e)}
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
