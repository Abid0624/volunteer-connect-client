import axios from "axios";
import React, { use, useEffect, useState } from "react";
import PostCard from "../Components/PostCard";

const AllVolunteerPost = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

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

  return (
    <div className="container px-6 py-10 mx-auto min-h-[calc(100vh-241px)] flex flex-col justify-between">
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
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
        <div>
          <button onClick={handleReset} className="btn">
            Reset
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.map((post) => (
          <PostCard key={post._id} post={post}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default AllVolunteerPost;
