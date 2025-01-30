import { useContext, useState } from "react";
import { images } from "../constants/constant";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../useContext/UseContext";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState({});
  const [userExists, setUserExists] = useState(false);
  const [success, setSuccess] = useState(false);
  const { setCurrentUser, setIsLoggedIn } = useContext(MyContext);

  const validateForm = () => {
    let newErrors = {};
    if (username.length < 6)
      newErrors.username = "Username must be at least 6 characters.";
    if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (password !== passwordConfirm)
      newErrors.passwordConfirm = "Passwords do not match.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newUserData = { username, email, password };
    try {
      const res = await fetch(
        "https://the-debuggers-journal-backend.onrender.com/api/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUserData),
        }
      );
      const result = await res.json();

      if (result.message === "User created successfully") {
        setSuccess(true);
        setCurrentUser(result.data.username);
        setIsLoggedIn(true);
        setTimeout(() => navigate("/"), 2000);
      } else {
        setUserExists(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent p-6">
      <h1 className="text-4xl font-semibold text-gray-800 mb-6">Sign Up</h1>
      <div className="bg-white shadow-lg rounded-lg flex overflow-hidden w-full max-w-4xl">
        <img
          src={images.signup}
          alt="Sign up"
          className="w-1/2 hidden md:block object-cover"
        />
        <div className="w-full md:w-1/2 p-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="Enter username"
                required
              />
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="Enter email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="Enter password"
                required
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="Confirm password"
                required
              />
              {errors.passwordConfirm && (
                <p className="text-red-500 text-sm">{errors.passwordConfirm}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>
          {userExists && (
            <p className="text-red-500 text-sm mt-2">User already exists</p>
          )}
          {success && (
            <p className="text-green-500 text-sm mt-2">
              User created successfully
            </p>
          )}
          <button
            onClick={() => navigate("/login")}
            className="mt-4 text-blue-600 hover:underline"
          >
            Already have an account? Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
