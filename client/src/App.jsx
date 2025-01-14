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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path={"*"} element={<h1>404</h1>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
