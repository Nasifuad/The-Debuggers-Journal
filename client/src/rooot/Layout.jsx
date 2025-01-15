import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col gap-2 justify-center">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
