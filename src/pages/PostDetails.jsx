import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchPostData();
  }, [id]);

  const fetchPostData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/job/${id}`
    );
    setPost(data);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <Helmet>
        <title>Volunteer Connect | Post Details{id}</title>
      </Helmet>
      <div className="bg-white shadow-md rounded-md p-4 sm:p-6">
        <img
          src={post?.thumbnail}
          alt={post?.title}
          className="w-full h-48 sm:h-64 object-cover rounded-md mb-6"
        />

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          {post?.title}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-gray-600">
          <p>
            <span className="font-semibold">Category:</span> {post?.category}
          </p>
          <p>
            <span className="font-semibold">Location:</span> {post?.location}
          </p>
          {post?.deadline && (
            <p>
              <span className="font-semibold">Deadline:</span>{" "}
              {format(new Date(post?.deadline), "P")}
            </p>
          )}
          <p>
            <span className="font-semibold">Volunteers Needed:</span>{" "}
            {post?.noOfVolunteer}
          </p>
          <div className="sm:col-span-2 flex gap-4">
            <div className="font-semibold">
              Organizer Name:{" "}
              <span className=" text-gray-800 font-normal text-base">
                {post?.host?.name}
              </span>
            </div>
            <div className="font-semibold">
              Organizer Email:{" "}
              <span className=" text-gray-800 font-normal text-base">
                {post?.host?.email}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-gray-700 text-sm sm:text-base">
          <span className="font-semibold">Description:</span>
          <p className="mt-1">{post?.description}</p>
        </div>
        <div className="mt-8 text-center sm:text-left">
          {post?.noOfVolunteer > 0 ? (
            <Link to={`/job-apply/${id}`}>
              <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
                Be a Volunteer
              </button>
            </Link>
          ) : (
            <p className="text-red-600 font-semibold">
              No volunteers needed for this post at the moment.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
