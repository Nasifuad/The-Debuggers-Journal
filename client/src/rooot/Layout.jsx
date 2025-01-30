import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 overflow-x-hidden ">
      {/* Animated background pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <pattern
          id="crossPattern"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 0 0 L 40 40"
            stroke="rgba(96, 165, 250, 0.3)"
            strokeWidth="1"
          />
          <path
            d="M 40 0 L 0 40"
            stroke="rgba(96, 165, 250, 0.3)"
            strokeWidth="1"
          />
          <circle
            cx="20"
            cy="20"
            r="1.5"
            fill="#60a5fa"
            className="animate-pulse opacity-0 hover:opacity-100 transition-opacity duration-300"
          />
        </pattern>

        <rect
          width="100%"
          height="100%"
          fill="url(#crossPattern)"
          className="move-pattern"
        />
      </svg>

      {/* Content container */}
      <div className="relative z-10 flex flex-col gap-2 justify- xl:w-[1440px] mx-auto h-full">
        <Navbar />
        <Outlet />
      </div>

      <style>{`
        @keyframes patternMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-40px, -40px);
          }
        }

        .move-pattern {
          animation: patternMove 20s linear infinite;
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.5);
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
