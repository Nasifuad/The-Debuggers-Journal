import { useState } from "react";
import { images } from "../constants/constant";
import { useNavigate } from "react-router-dom";
// import { MyContext } from "../useContext/UseContext";
const Signup = () => {
  const navigate = useNavigate();
  const [isNameError, setIsNameError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  // const [userData, setUserData] = useState([]);

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    const isNameValid = username.length >= 6;
    const isPasswordValid = password.length >= 6;

    setIsNameError(!isNameValid);
    setIsPasswordError(!isPasswordValid);

    if (!isNameValid || !isPasswordValid) {
      return; // Stop execution if validation fails
    }

    const newUserData = { username, email, password };

    // Call postData with the constructed object instead of relying on state
    postData(newUserData);

    // Reset form fields
    setName("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");
    navigate("/");
  };

  const postData = async (data) => {
    try {
      const res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const data1 = await res.json();
      console.log(data1);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className="text-4xl font-mono flex justify-center items-center mt-10 ">
        Welcome to the {"  "}
        <span className="ml-2 text-white font-bold bg-emerald-600 p-2 rounded-lg shadow-xl">
          SignUp Page
        </span>
      </h1>
      <div className="w-full flex justify-center items-center ">
        <div>
          <img src={images.signup} alt="login" className="w-[500px]" />
        </div>

        <div className=" w-1/2 h-[500px] flex justify-center items-center flex-col">
          <form
            className="flex flex-col w-1/2"
            onSubmit={(e) => handleSubmit(e)}
          >
            <label htmlFor="name" className="font-semibold pb-2">
              Username:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Username"
              autoComplete="false"
              required
              value={username}
              onChange={(e) => handleNameChange(e)}
              className="p-2 border border-gray-300 rounded-md outline-none text-gray-500 capitalize font-semibold"
            />
            {isNameError && (
              <p className="text-red-500 font-bold text-sm">
                Username must be at least 6 characters
              </p>
            )}
            <br />
            <label htmlFor="email" className="font-semibold pb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="false"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-300 rounded-md outline-none text-gray-500"
            />
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
            <label htmlFor="passwordConfirm" className="font-semibold pb-2">
              Confirm Password:
            </label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              required
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              placeholder="Confirm Password"
              className="p-2 border border-gray-300 rounded-md outline-none"
            />

            <br />
            <button
              type="submit"
              className="bg-blue-900 px-4 py-2 text-white rounded-md hover:bg-blue-800 font-mono"
            >
              Sign Up
            </button>
          </form>
          <button
            type="submit"
            className=" px-4 py-2 text-black rounded-md font-mono"
            onClick={() => navigate("/login")}
          >
            Already have an account?
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
