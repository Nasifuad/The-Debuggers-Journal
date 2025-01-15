import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col gap-2 justify-center xl:w-[1440px] mx-auto">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
