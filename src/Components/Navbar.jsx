import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { UseTheme } from '../Hooks/UseTheme';
import { IoMoon, IoSunny } from "react-icons/io5";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user } = useContext(AuthContext);
  const { changeTheme, mode } = UseTheme();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Biodatas", path: "/Biodatas" },
    { name: "Blog", path: "/Blogs" },
    { name: "Contact Us", path: "/Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav
        className={`fixed top-0 z-50 w-full transition-shadow duration-300 ${isScrolled ? "shadow-md bg-white backdrop-blur-md bg-opacity-90 dark:bg-gray-900" : "bg-transparent"
          }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/favicon.ico" className="h-8" alt="LifePair Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              LifePair
            </span>
          </Link>

          {/* Get Started & Menu Button */}
          <div className="flex md:order-2 space-x-3">
            <button onClick={changeTheme} aria-label="Toggle Theme" className="btn btn-ghost  dark:text-white">
              {mode === "light" ? <IoSunny /> : <IoMoon />}
            </button>
            {user ? (
              <div className="flex space-x-2">
                <Link to={'/Dashboard/ProfilePage'}> <img
                  src={user?.photoURL || '/default-avatar.png'}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                /></Link>
                <Link to="/Dashboard">
                  <button
                    type="button"
                    className="text-white bg-[#AA0000] hover:bg-red-700 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#AA0000] dark:hover:bg-red-700"
                  >
                    Dashboard
                  </button>
                </Link>
              </div>
            ) : (
              <Link to="/Login">
                <button
                  type="button"
                  className="text-white bg-[#AA0000] hover:bg-red-700 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#AA0000] dark:hover:bg-red-700"
                >
                  Login
                </button>
              </Link>
            )}

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-expanded={isMenuOpen}
              aria-controls="navbar-cta"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`md:flex md:items-center md:w-auto md:order-1 ${isMenuOpen
              ? "block z-[90] bg-gray-100 md:bg-transparent absolute top-full right-0 w-48 md:static"
              : "hidden"
              }`}
            id="navbar-cta"
          >
            <ul className="flex flex-col text-xl p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block py-2 px-3 md:p-0 rounded ${isActive
                        ? "text-red-900 font-bold"
                        : "text-[#AA0000] dark:text-white"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
