import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navigation = [
    { name: "Home", to: "/" },
    { name: "Add Blog", to: "add" },
    { name: "See Blogs", to: "blogs" },
    { name: "About", to: "about" },
  ];
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only text-black">The Debugger`s Journal</span>
            <img
              alt=""
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-sm/6 font-semibold text-white bg-blue-900 px-3 py-2 rounded-lg hover:bg-neutral-800 hover:text-gray-1"
                  : "text-sm/6 font-semibold text-gray-200 bg-neutral-600 px-3 py-2 rounded-lg hover:bg-neutral-800 hover:text-gray-1"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm/6 font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
