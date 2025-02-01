import { useContext, useState } from "react";
import { images } from "../constants/constant";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../useContext/UseContext";
import { motion } from "framer-motion";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [userExists, setUserExists] = useState(false);
  const [success, setSuccess] = useState(false);
  const {
    setCurrentUser,
    setIsLoggedIn,
    setAvatar: setAvatarContext,
    setCoverImage: setCoverImageContext,
  } = useContext(MyContext);

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

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    if (avatar) formData.append("avatar", avatar);
    if (coverImage) formData.append("coverImage", coverImage);

    try {
      const res = await fetch(
        "https://the-debuggers-journal-backend.onrender.com/api/v1/user/register",
        {
          method: "POST",
          body: formData,
        }
      );
      const result = await res.json();
      console.log("Final result", result);
      if (result.message === "User created successfully") {
        console.log("If condition is fulfilled");
        setSuccess(true);
        setCurrentUser(result.data.username);
        setIsLoggedIn(true);
        setAvatarContext(result.data.avatar);
        setCoverImageContext(result.data.coverImage);
        localStorage.setItem("currentUser", result.data.username);
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
        localStorage.setItem("coverImage", result.data.coverImage);
        localStorage.setItem("avatar", result.data.avatar);
        setTimeout(() => navigate("/"), 2000);
      } else {
        setUserExists(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  const successVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-4xl font-semibold text-white mb-6">Sign Up</h1>
      <motion.div
        className="shadow-xl rounded-lg flex overflow-hidden justify-center items-center w-full max-w-4xl"
        variants={containerVariants}
      >
        <motion.img
          src={images.signup}
          alt="Sign up"
          className="w-1/2 hidden xl:block object-cover"
          variants={imageVariants}
        />
        <div className="w-3/4 xl:w-1/2 p-8 flex flex-col justify-center">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <motion.div variants={inputVariants}>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter username"
                required
              />
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username}</p>
              )}
            </motion.div>
            <motion.div variants={inputVariants}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email"
                required
              />
            </motion.div>
            <motion.div variants={inputVariants}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter password"
                required
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </motion.div>

            <motion.div variants={inputVariants}>
              <input
                type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm password"
                required
              />
              {errors.passwordConfirm && (
                <p className="text-red-500 text-sm">{errors.passwordConfirm}</p>
              )}
            </motion.div>
            <motion.div variants={inputVariants}>
              <label className="block text-gray-200 font-medium mb-2">
                Upload your avatar
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setAvatar(e.target.files[0])}
                className="w-full bg-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </motion.div>
            <motion.div variants={inputVariants}>
              <label className="block text-gray-200 font-medium mb-2">
                Upload your cover
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setCoverImage(e.target.files[0])}
                className="w-full bg-gray-500 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>
            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Sign Up
            </motion.button>
          </form>
          {userExists && (
            <motion.p
              className="text-red-500 text-sm mt-2"
              variants={successVariants}
            >
              User already exists
            </motion.p>
          )}
          {success && (
            <motion.p
              className="text-green-500 text-sm mt-2"
              variants={successVariants}
            >
              User created successfully
            </motion.p>
          )}
          <motion.button
            onClick={() => navigate("/login")}
            className="mt-4 text-blue-600 hover:underline"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Already have an account?{" "}
            <span className="underline text-white">Log in</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Signup;
