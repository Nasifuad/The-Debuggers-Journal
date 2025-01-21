import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../../rooot/Layout";
import Homepage from "../Homepage";
import BlogPage from "../BlogPage";
import LoginPage from "../LoginPage";
import Signup from "../Signup";
import Profile from "../Profile";
import BlogDetails from "../../components/BlogDetails";
import Blogs from "../Blogs";
import CreateBlog from "../CreateBlog";
import About from "../About";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      <Route path="blog" element={<Blogs />}>
        <Route index element={<BlogPage />} />
        <Route path=":id" element={<BlogDetails />} />
      </Route>
      <Route path="/add" element={<CreateBlog />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/about" element={<About />} />
      <Route path={"*"} element={<h1>404</h1>} />
    </Route>
  )
);
