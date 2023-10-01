import { Link, NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-700" : "text-gray-300"
          }
        >
          Trips
        </NavLink>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-700" : "text-gray-300"
              }
            >
              About Aero
            </NavLink>
          </summary>
          <ul className="p-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-700" : "text-gray-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-blue-700" : "text-gray-300"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-blue-700" : "text-gray-300"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-700" : "text-gray-300"
          }
        >
          Your Aero Home
        </NavLink>
      </li>
    </>
  );

  const menuItems = (
    <>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-blue-700" : "text-gray-300"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/user-account"
          className={({ isActive }) =>
            isActive ? "text-blue-700" : "text-gray-300"
          }
        >
          Account
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/help-center"
          className={({ isActive }) =>
            isActive ? "text-blue-700" : "text-gray-300"
          }
        >
          Help Center
        </NavLink>
      </li>
      <li>
        <button className="uppercase">Logout</button>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-lg">
      <div className="max-w-screen-xl mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden mr-5">
                <MenuIcon />
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content uppercase mt-3 z-[1] p-2 shadow rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <Link
              to="/"
              className="flex flex-row gap-3 items-center text-xl font-bold ml-16 md:ml-60 lg:ml-0"
            >
              <img src={logo} className="w-9" />{" "}
              <span className="tracking-wider">TripAero</span>
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 uppercase hover:rounded-xl">
              {navItems}
            </ul>
          </div>

          <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="avatar cursor-pointer">
                <div className="">
                  <AccountCircleIcon sx={{ width: "40px", height: "40px" }} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm uppercase dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-3"
              >
                {menuItems}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
