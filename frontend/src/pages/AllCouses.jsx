import React, { useEffect, useState } from "react";
import Card from "../components/Card.jsx";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate, useSearchParams } from "react-router-dom";
import Nav from "../components/Nav";
import ai from "../assets/SearchAi.png";
import { useSelector } from "react-redux";

function AllCourses() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const [category, setCategory] = useState([]);

  const [filterCourses, setFilterCourses] = useState([]);

  const { courseData } = useSelector((state) => state.course);

  const toggleCategory = (e) => {
    const value = e.target.value;

    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory((prev) => [...prev, value]);
    }
  };

  useEffect(() => {
    const selectedCategory = searchParams.get("category");

    if (selectedCategory) {
      setCategory([selectedCategory]);
    } else {
      setCategory([]);
    }
  }, [searchParams]);

  const applyFilter = () => {
    let courseCopy = [...courseData];

    if (category.length > 0) {
      courseCopy = courseCopy.filter((course) =>
        category.includes(course.category)
      );
    }

    setFilterCourses(courseCopy);
  };

  useEffect(() => {
    setFilterCourses(courseData);
  }, [courseData]);

  useEffect(() => {
    applyFilter();
  }, [category, courseData]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Nav />

      {/* Toggle Button */}
      <button
        onClick={() => setIsSidebarVisible((prev) => !prev)}
        className="fixed top-20 left-4 z-50 bg-white text-black px-3 py-1 rounded md:hidden border-2 border-black"
      >
        {isSidebarVisible ? "Hide" : "Show"} Filters
      </button>

      {/* Sidebar */}
      <aside
        className={`w-[260px] h-screen overflow-y-auto bg-black fixed top-0 left-0 p-6 py-[130px] border-r border-gray-200 shadow-md transition-transform duration-300 z-5
        ${
          isSidebarVisible
            ? "translate-x-0"
            : "-translate-x-full"
        }
        md:block md:translate-x-0`}
      >
        <h2 className="text-xl font-bold flex items-center justify-center gap-2 text-gray-50 mb-6">
          <FaArrowLeftLong
            className="text-white cursor-pointer"
            onClick={() => navigate("/")}
          />
          Filter by Category
        </h2>

        <form
          className="space-y-4 text-sm bg-gray-600 border-white text-white border p-5 rounded-2xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <button
            className="px-3 py-2 bg-black text-white rounded-lg text-sm flex items-center justify-center gap-2 cursor-pointer"
            onClick={() => navigate("/searchwithai")}
          >
            Search with AI
            <img
              src={ai}
              className="w-[30px] h-[30px] rounded-full"
              alt=""
            />
          </button>
                    <label className="flex items-center gap-3 cursor-pointer hover:text-gray-200 transition">
            <input
              type="checkbox"
              className="accent-black w-4 h-4 rounded-md"
              value="App Development"
              checked={category.includes("App Development")}
              onChange={toggleCategory}
            />
            App Development
          </label>

          <label className="flex items-center gap-3 cursor-pointer hover:text-gray-200 transition">
            <input
              type="checkbox"
              className="accent-black w-4 h-4 rounded-md"
              value="AI/ML"
              checked={category.includes("AI/ML")}
              onChange={toggleCategory}
            />
            AI/ML
          </label>

          <label className="flex items-center gap-3 cursor-pointer hover:text-gray-200 transition">
            <input
              type="checkbox"
              className="accent-black w-4 h-4 rounded-md"
              value="AI Tools"
              checked={category.includes("AI Tools")}
              onChange={toggleCategory}
            />
            AI Tools
          </label>

          <label className="flex items-center gap-3 cursor-pointer hover:text-gray-200 transition">
            <input
              type="checkbox"
              className="accent-black w-4 h-4 rounded-md"
              value="Data Science"
              checked={category.includes("Data Science")}
              onChange={toggleCategory}
            />
            Data Science
          </label>

          <label className="flex items-center gap-3 cursor-pointer hover:text-gray-200 transition">
            <input
              type="checkbox"
              className="accent-black w-4 h-4 rounded-md"
              value="Data Analytics"
              checked={category.includes("Data Analytics")}
              onChange={toggleCategory}
            />
            Data Analytics
          </label>

          <label className="flex items-center gap-3 cursor-pointer hover:text-gray-200 transition">
            <input
              type="checkbox"
              className="accent-black w-4 h-4 rounded-md"
              value="Ethical Hacking"
              checked={category.includes("Ethical Hacking")}
              onChange={toggleCategory}
            />
            Ethical Hacking
          </label>

          <label className="flex items-center gap-3 cursor-pointer hover:text-gray-200 transition">
            <input
              type="checkbox"
              className="accent-black w-4 h-4 rounded-md"
              value="UI UX Designing"
              checked={category.includes("UI UX Designing")}
              onChange={toggleCategory}
            />
            UI/UX Designing
          </label>

          <label className="flex items-center gap-3 cursor-pointer hover:text-gray-200 transition">
            <input
              type="checkbox"
              className="accent-black w-4 h-4 rounded-md"
              value="Web Development"
              checked={category.includes("Web Development")}
              onChange={toggleCategory}
            />
            Web Development
          </label>

          <label className="flex items-center gap-3 cursor-pointer hover:text-gray-200 transition">
            <input
              type="checkbox"
              className="accent-black w-4 h-4 rounded-md"
              value="Others"
              checked={category.includes("Others")}
              onChange={toggleCategory}
            />
            Others
          </label>
        </form>
      </aside>

      {/* Main Courses Section */}
      <main className="w-full transition-all duration-300 py-[130px] md:pl-[300px] flex items-start justify-center md:justify-start flex-wrap gap-6 px-[10px]">

        {filterCourses.length > 0 ? (
          filterCourses.map((item, index) => (
            <Card
              key={index}
              thumbnail={item.thumbnail}
              title={item.title}
              price={item.price}
              category={item.category}
              id={item._id}
              reviews={item.reviews}
            />
          ))
        ) : (
          <div className="w-full flex justify-center items-center mt-20">
            <h2 className="text-2xl font-semibold text-gray-500">
              No Courses Found
            </h2>
          </div>
        )}

      </main>
    </div>
  );
}

export default AllCourses;