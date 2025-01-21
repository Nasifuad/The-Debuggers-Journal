import { useContext, useState } from "react";
import { images } from "../constants/constant";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../useContext/UseContext";

const Signup = () => {
  const navigate = useNavigate();
  const [isNameError, setIsNameError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isConfirmPasswordError, setIsConfirmPasswordError] = useState(false);
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [userExits, setUserExits] = useState(false);
  const [success, setSuccess] = useState(false);
  const { currentUser, setCurrentUser, setIsLoggedIn } = useContext(MyContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isNameValid = username.length >= 6;
    const isPasswordValid = password.length >= 6;
    const isPasswordsMatch = password === passwordConfirm;

    setIsNameError(!isNameValid);
    setIsPasswordError(!isPasswordValid);
    setIsConfirmPasswordError(!isPasswordsMatch);

    // If validation fails, stop execution
    if (!isNameValid || !isPasswordValid || !isPasswordsMatch) {
      return;
    }

    const newUserData = { username, email, password };

    try {
      const res = await fetch(
        "https://the-debuggers-journal-e2f6.vercel.app/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUserData),
        }
      );

      const result = await res.json();
      console.log(result);

      if (result.message === "User created successfully") {
        setSuccess(true);
        console.log(currentUser);
        setCurrentUser(result.data.username);
        console.log(result.data.username);
        console.log(currentUser);
        setIsLoggedIn(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setUserExits(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <h1 className="text-4xl font-mono flex justify-center items-center mt-10">
        Welcome to the{" "}
        <span className="ml-2 text-white font-bold bg-emerald-600 p-2 rounded-lg shadow-xl">
          SignUp Page
        </span>
      </h1>
      <div className="w-full flex justify-center items-center">
        <div>
          <img src={images.signup} alt="Sign up" className="w-[500px]" />
        </div>

        <div className="w-1/2 h-[500px] flex justify-center items-center flex-col">
          <form className="flex flex-col w-1/2" onSubmit={handleSubmit}>
            <label htmlFor="name" className="font-semibold pb-2">
              Username:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Username"
              autoComplete="off"
              required
              value={username}
              onChange={(e) => setName(e.target.value)}
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
              autoComplete="off"
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
            {isConfirmPasswordError && (
              <p className="text-red-500 font-bold text-sm">
                Passwords do not match
              </p>
            )}
            <br />

            <button
              type="submit"
              className="bg-blue-900 px-4 py-2 text-white rounded-md hover:bg-blue-800 font-mono"
            >
              Sign Up
            </button>
          </form>
          {userExits && (
            <p className="text-red-500 font-bold text-sm">
              User already exists
            </p>
          )}
          {success && (
            <p className="text-green-500 font-bold text-sm">
              User created successfully
            </p>
          )}

          <button
            type="button"
            className="px-4 py-2 text-black rounded-md font-mono"
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
