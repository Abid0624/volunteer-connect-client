import axios from "axios";
import React, { useEffect, useState } from "react";
import PostCard from "../Components/PostCard";
import { Helmet } from "react-helmet-async";
import { CiViewTable } from "react-icons/ci";
import { IoGrid } from "react-icons/io5";
import { format } from "date-fns";

const AllVolunteerPost = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [isGridView, setIsGridView] = useState(true);

  useEffect(() => {
    const fetchAllPost = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/all-jobs?search=${search}`
      );
      setPosts(data);
    };
    fetchAllPost();
  }, [search]);

  const handleReset = () => {
    setSearch("");
  };

  useEffect(() => {
    const layout = localStorage.getItem("layoutMode");
    if (layout === "table") setIsGridView(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("layoutMode", isGridView ? "grid" : "table");
  }, [isGridView]);

  return (
    <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-241px)] flex flex-col justify-between">
      <Helmet>
        <title>Volunteer Connect | All Volunteer</title>
      </Helmet>

      <div className="flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
          <input
            className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="text"
            name="search"
            placeholder="Enter Job Title"
            aria-label="Enter Job Title"
          />
          <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
            Search
          </button>
        </div>

        {/* Reset Button */}
        <button onClick={handleReset} className="btn">
          Reset
        </button>

        <div className="flex gap-2">
          <button
            onClick={() => setIsGridView(true)}
            className={`p-2 rounded ${
              isGridView ? "bg-blue-600 text-white" : "bg-gray-300"
            }`}
            title="Grid View"
          >
            <IoGrid />
          </button>
          <button
            onClick={() => setIsGridView(false)}
            className={`p-2 rounded ${
              !isGridView ? "bg-blue-600 text-white" : "bg-gray-300"
            }`}
            title="Table View"
          >
            <CiViewTable />
          </button>
        </div>
      </div>

      {isGridView ? (
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((post) => (
            <PostCard key={post._id} post={post}></PostCard>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto mt-8">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border">Title</th>
                <th className="p-3 border">Location</th>
                <th className="p-3 border">Deadline</th>
                <th className="p-3 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post._id} className="hover:bg-gray-50">
                  <td className="p-3 border">{post.title}</td>
                  <td className="p-3 border">{post.location || "N/A"}</td>
                  <td className="p-3 border">
                    {format(new Date(post.deadline), "P")}
                  </td>
                  <td className="p-3 border">
                    <button className="btn btn-sm bg-blue-500 text-white">
                      Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllVolunteerPost;
