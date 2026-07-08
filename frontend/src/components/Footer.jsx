import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";

const Footer = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/allcourses?category=${encodeURIComponent(category)}`);
  };

  return (
    <footer className="bg-black text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto flex lg:items-center items-start justify-center gap-[40px] lg:gap-[150px] flex-col lg:flex-row">

        {/* Logo + Description */}
        <div className="lg:w-[40%] md:w-[50%] w-[100%]">
          <img
            src={logo}
            alt="Logo"
            className="h-10 mb-3 border rounded-[5px]"
          />

          <h2 className="text-xl font-bold text-white mb-3">
            LMS Certifications
          </h2>

          <p className="text-sm">
            AI-powered learning platform to help you grow smarter. Learn
            anything, anytime, anywhere.
          </p>
        </div>

        {/* Quick Links */}
        <div className="lg:w-[30%] md:w-[100%]">
          <h3 className="text-white font-semibold mb-2">
            Quick Links
          </h3>

          <ul className="space-y-1 text-sm">

            <li
              className="hover:text-white cursor-pointer transition"
              onClick={() => navigate("/")}
            >
              Home
            </li>

            <li
              className="hover:text-white cursor-pointer transition"
              onClick={() => navigate("/allcourses")}
            >
              Courses
            </li>

            <li
              className="hover:text-white cursor-pointer transition"
              onClick={() => navigate("/login")}
            >
              Login
            </li>

            <li
              className="hover:text-white cursor-pointer transition"
              onClick={() => navigate("/profile")}
            >
              My Profile
            </li>

          </ul>
        </div>

        {/* Explore Categories */}
        <div className="lg:w-[30%] md:w-[100%]">
          <h3 className="text-white font-semibold mb-2">
            Explore Categories
          </h3>

          <ul className="space-y-1 text-sm">

            <li
              className="hover:text-white cursor-pointer transition"
              onClick={() =>
                handleCategoryClick("Web Development")
              }
            >
              Web Development
            </li>

            <li
              className="hover:text-white cursor-pointer transition"
              onClick={() =>
                handleCategoryClick("AI/ML")
              }
            >
              AI/ML
            </li>

            <li
              className="hover:text-white cursor-pointer transition"
              onClick={() =>
                handleCategoryClick("AI Tools")
              }
            >
              AI Tools
            </li>

            <li
              className="hover:text-white cursor-pointer transition"
              onClick={() =>
                handleCategoryClick("Data Science")
              }
            >
              Data Science
            </li>

            <li
              className="hover:text-white cursor-pointer transition"
              onClick={() =>
                handleCategoryClick("Data Analytics")
              }
            >
              Data Analytics
            </li>

            <li
              className="hover:text-white cursor-pointer transition"
              onClick={() =>
                handleCategoryClick("Ethical Hacking")
              }
            >
              Ethical Hacking
            </li>

            <li
              className="hover:text-white cursor-pointer transition"
              onClick={() =>
                handleCategoryClick("UI UX Designing")
              }
            >
              UI/UX Design
            </li>

            <li
              className="hover:text-white cursor-pointer transition"
              onClick={() =>
                handleCategoryClick("Others")
              }
            >
              Others
            </li>

          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} LMS Certifications Pvt. Ltd. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;