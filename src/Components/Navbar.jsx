import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/vc logo.jpg";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start gap-4 lg:gap-0">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-horizontal dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">My Profile</Link>
                <ul className="p-2">
                  <li>
                    <Link to="/">Add Volunteer</Link>
                  </li>
                  <li>
                    <Link to="/">Manage My Posts</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">All Volunteer</Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <div className="flex justify-center items-center gap-1">
              <h3 className="font-bold text-2xl">Volunteer Connect</h3>
              <img className="w-auto h-10 rounded-full" src={logo} alt="" />
            </div>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <details className="relative z-50">
                <summary>My Profile</summary>
                <ul className="p-2">
                  <li>
                    <Link to="/add-volunteer">Add Volunteer</Link>
                  </li>
                  <li>
                    <Link to="/my-posts">Manage My Posts</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/all-volunteer">All Volunteer Post</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <div className="flex items-center gap-2">
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName || "No name"}
              >
                <img
                  src={
                    user?.photoURL
                      ? user.photoURL
                      : "https://www.w3schools.com/howto/img_avatar.png"
                  }
                  alt="Profile"
                  className="w-10 h-10 rounded-full border object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <button onClick={logOut} className="btn btn-neutral">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn bg-gray-200 block text-center">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
