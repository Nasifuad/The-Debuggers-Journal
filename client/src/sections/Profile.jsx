import { useContext } from "react";
import { MyContext } from "../useContext/UseContext";
import { useState } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { FaEdit, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("John Doe");
  const { currentUser, coverImage, avatar, setAvatar } = useContext(MyContext);
  const {
    data: blogs,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await fetch(
        "https://the-debuggers-journal-backend.onrender.com/api/blogs"
      );
      if (!response.ok) throw new Error("Failed to fetch blogs");
      const data = await response.json();
      setBlogs(data);
      return response.json();
    },
  });
  const [bio, setBio] = useState(
    "Full Stack Developer | Open Source Enthusiast"
  );

  const [socialLinks] = useState({
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    twitter: "https://twitter.com",
  });

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add logic to save changes to the backend
  };

  return (
    <motion.div
      className="min-h-screen  flex  justify-center p-6 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-4xl "
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative">
          <div className="h-[300px] bg-gradient-to-r from-blue-400 to-purple-500 ">
            <img
              src={coverImage}
              alt="cover"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="absolute -bottom-16 left-6">
            <motion.div
              className="relative w-32 h-32 rounded-full border-4 border-white overflow-hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img
                src={avatar}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              {isEditing && (
                <label
                  htmlFor="avatar-upload"
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer"
                >
                  <FaEdit className="text-white text-2xl" />
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleAvatarChange}
                  />
                </label>
              )}
            </motion.div>
          </div>
        </div>
        <div className="p-6 mt-16 border-b-2 border-gray-200 shadow-lg">
          <div className="flex justify-between items-center">
            <motion.h1
              className="text-3xl font-bold text-gray-800"
              whileHover={{ scale: 1.05 }}
            >
              {currentUser}
            </motion.h1>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="p-2 rounded-full bg-purple-500 text-white hover:bg-purple-600 transition"
            >
              <FaEdit className="text-xl" />
            </button>
          </div>
          <motion.p className="text-gray-600 mt-2" whileHover={{ scale: 1.02 }}>
            {bio}
          </motion.p>
          {isEditing && (
            <motion.div
              className="mt-4 space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Name"
              />
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Bio"
                rows="3"
              />
              <button
                onClick={handleSave}
                className="w-full bg-purple-500 text-white py-2 rounded-md hover:bg-purple-600 transition"
              >
                Save Changes
              </button>
            </motion.div>
          )}
          <div className="mt-6 flex space-x-4">
            <motion.a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <FaLinkedin className="text-2xl" />
            </motion.a>
            <motion.a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              <FaGithub className="text-2xl" />
            </motion.a>
            <motion.a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-gray-600 hover:text-blue-400 transition"
            >
              <FaTwitter className="text-2xl" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Profile;
