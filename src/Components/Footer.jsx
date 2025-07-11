import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/vc logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-base-200 p-10 text-base-content">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
        {/* Logo & Brand */}
        <div className="flex flex-col items-center lg:items-start">
          <div className="flex items-center gap-3 mb-2">
            <img
              src={logo}
              alt="Volunteer Connect Logo"
              className="w-12 h-12 rounded-full"
            />
            <span className="text-2xl font-bold">Volunteer Connect</span>
          </div>
          <p className="text-sm text-center lg:text-left">
            Empowering communities through volunteering.
            <br />© {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Useful Links */}
        <div className="flex gap-10 text-sm">
          <div>
            <h4 className="footer-title">Navigation</h4>
            <Link className="link link-hover block" to="/">
              Home
            </Link>
            <Link className="link link-hover block" to="/login">
              Login
            </Link>
            <Link className="link link-hover block" to="/register">
              Register
            </Link>
          </div>
          <div>
            <h4 className="footer-title">Community</h4>
            <Link className="link link-hover block" to="/">
              All Volunteers
            </Link>
            <Link className="link link-hover block" to="/">
              Add Volunteer
            </Link>
            <Link className="link link-hover block" to="/">
              My Posts
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center lg:text-right">
          <h4 className="footer-title">Follow Us</h4>
          <div className="flex justify-center lg:justify-end gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="link link-hover"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12a10 10 0 10-11.6 9.8v-6.9h-2.7V12h2.7V9.4c0-2.7 1.6-4.2 4.1-4.2 1.2 0 2.5.2 2.5.2v2.8h-1.4c-1.4 0-1.8.9-1.8 1.8V12h3.1l-.5 2.9h-2.6v6.9A10 10 0 0022 12z" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="link link-hover"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.34-1.6.58-2.47.69a4.2 4.2 0 001.84-2.31 8.33 8.33 0 01-2.66 1A4.15 4.15 0 0016.07 4c-2.27 0-4.1 1.84-4.1 4.1 0 .32.04.64.1.95a11.75 11.75 0 01-8.53-4.32 4.07 4.07 0 001.28 5.47 4.2 4.2 0 01-1.85-.51v.05c0 2.02 1.45 3.71 3.38 4.1-.35.09-.72.14-1.1.14-.27 0-.53-.03-.79-.08a4.15 4.15 0 003.87 2.89A8.3 8.3 0 014 19.54a11.74 11.74 0 006.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.35-.02-.53A8.36 8.36 0 0024 5.56a8.28 8.28 0 01-2.54.7z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="link link-hover"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 002.48 2.5A2.5 2.5 0 007.48 6 2.5 2.5 0 004.98 3.5zM2 8.98h5.92v12H2v-12zm7.07 0H15v1.67h.08c.97-1.83 3.35-2 4.4-.6 1.07 1.45.94 4.14.94 6.05v5.88h-5.9v-5.26c0-1.26-.03-2.88-1.75-2.88-1.75 0-2.02 1.36-2.02 2.78v5.36H9.07v-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
