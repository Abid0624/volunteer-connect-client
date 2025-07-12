import axios from "axios";
import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { Link } from "react-router-dom";

const HotJobs = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchAllPost = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/asc-jobs`
      );
      setPosts(data);
    };
    fetchAllPost();
  }, []);
  return (
    <div className="container px-6 py-10 mx-auto">
      <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl ">
        Volunteer Needs Now!
      </h1>
      <div className="grid mb-2 grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {posts.map((post) => (
          <PostCard key={post._id} post={post}></PostCard>
        ))}
      </div>
      <Link to="/all-volunteer">
        <button className="btn mt-2 btn-secondary">See All</button>
      </Link>
    </div>
  );
};

export default HotJobs;
