import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../rooot/Layout";
import Homepage from "../sections/Homepage";
import BlogPage from "../sections/BlogPage";
import LoginPage from "../sections/LoginPage";
import Signup from "../sections/Signup";
import Profile from "../sections/Profile";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="/add" element={<BlogPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path={"*"} element={<h1>404</h1>} />
    </Route>
  )
);
