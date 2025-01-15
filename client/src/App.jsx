import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./rooot/Layout";
import Homepage from "./sections/Homepage";
import BlogPage from "./sections/BlogPage";
import LoginPage from "./sections/LoginPage";
import Signup from "./sections/Signup";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/add" element={<BlogPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path={"*"} element={<h1>404</h1>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
