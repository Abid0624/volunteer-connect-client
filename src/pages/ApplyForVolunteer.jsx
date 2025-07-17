import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
import toast from "react-hot-toast";

const ApplyForVolunteer = () => {
  const { user } = useContext(AuthContext);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const suggestion = form.suggestion.value;

    const formData = {
      volunteerName: user?.displayName,
      volunteerEmail: user?.email,
      suggestion,
      status: "Requested",
      postId: id,
      title: post.title,
      thumbnail: post.thumbnail,
      description: post.description,
      category: post.category,
      location: post.location,
      noOfVolunteer: post.noOfVolunteer,
      deadline: post.deadline,
      host: post.host,
    };

    // check apply permission validation
    if (user?.email === post?.host?.email)
      return toast.error("Action not permitted!!!");

    try {
      // make a post req to save data in db
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-application`,
        formData
      );

      toast.success("Your Request Sent Successfully!!!");
      navigate("/my-posts");
      console.log(data);
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className="p-2 md:p-6 mx-auto bg-white rounded-md shadow-md w-full max-w-4xl">
        <h2 className="text-lg font-semibold text-gray-700 capitalize">
          Be a Volunteer
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label htmlFor="thumbnail" className="text-gray-700">
                Thumbnail
              </label>
              <input
                type="text"
                name="thumbnail"
                id="thumbnail"
                readOnly
                value={post?.thumbnail || ""}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="title" className="text-gray-700">
                Post Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                readOnly
                value={post?.title || ""}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="description" className="text-gray-700">
                Description
              </label>
              <textarea
                name="description"
                id="description"
                readOnly
                value={post?.description || ""}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md"
              ></textarea>
            </div>

            <div>
              <label htmlFor="category" className="text-gray-700">
                Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                readOnly
                value={post?.category || ""}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="location" className="text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                readOnly
                value={post?.location || ""}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="noOfVolunteer" className="text-gray-700">
                Volunteers Needed
              </label>
              <input
                type="number"
                name="noOfVolunteer"
                id="noOfVolunteer"
                readOnly
                value={post?.noOfVolunteer || ""}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="deadline" className="text-gray-700">
                Deadline
              </label>
              <input
                type="text"
                name="deadline"
                id="deadline"
                readOnly
                value={
                  post?.deadline ? format(new Date(post.deadline), "P") : ""
                }
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="hostName" className="text-gray-700">
                Organizer Name
              </label>
              <input
                type="text"
                name="hostName"
                id="hostName"
                readOnly
                value={post?.host?.name || ""}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="hostEmail" className="text-gray-700">
                Organizer Email
              </label>
              <input
                type="email"
                name="hostEmail"
                id="hostEmail"
                readOnly
                value={post?.host?.email || ""}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md"
              />
            </div>

            {/* Volunteer Info */}
            <div>
              <label htmlFor="volunteerName" className="text-gray-700">
                Volunteer Name
              </label>
              <input
                type="text"
                name="volunteerName"
                id="volunteerName"
                readOnly
                value={user?.displayName || ""}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="volunteerEmail" className="text-gray-700">
                Volunteer Email
              </label>
              <input
                type="email"
                name="volunteerEmail"
                id="volunteerEmail"
                readOnly
                value={user?.email || ""}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-200 rounded-md"
              />
            </div>
          </div>

          {/* Suggestion */}
          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="suggestion" className="text-gray-700">
              Suggestion
            </label>
            <textarea
              id="suggestion"
              name="suggestion"
              required
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md"
              placeholder="Write your suggestion..."
            ></textarea>
          </div>

          <div className="flex justify-end mt-6">
            <button className=" px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Request
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ApplyForVolunteer;
