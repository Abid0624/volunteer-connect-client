import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateVolunteerPost = () => {
  const [startDate, setStartDate] = useState(new Date());
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
    setStartDate(new Date(data.deadline));
  };

  console.log(post);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.job_title.value;
    const email = form.email.value;
    const deadline = startDate;
    const category = form.category.value;
    const noOfVolunteer = parseFloat(form.noOfVolunteer.value);
    const thumbnail = form.thumbnail.value;
    const location = form.location.value;
    const description = form.description.value;

    const formData = {
      title,
      thumbnail,
      host: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
      deadline,
      category,
      noOfVolunteer,
      location,
      description,
    };

    try {
      // make a post req to save data in db
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/update-job/${id}`,
        formData
      );
      form.reset();
      toast.success("Data Updated Successfully!!!");
      navigate("/my-posts");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Update Post
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="job_title">
                Job Title
              </label>
              <input
                id="job_title"
                name="job_title"
                type="text"
                defaultValue={post?.title}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="thumbnail">
                Thumbnail
              </label>
              <input
                id="thumbnail"
                name="thumbnail"
                type="text"
                defaultValue={post?.thumbnail}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="name">
                Organizer Name
              </label>
              <input
                id="name"
                type="name"
                name="name"
                defaultValue={user?.displayName}
                disabled={true}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Organizer Email
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                defaultValue={user?.email}
                disabled={true}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Deadline</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            {post.category && (
              <div className="flex flex-col gap-2 ">
                <label className="text-gray-700 " htmlFor="category">
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  defaultValue={post?.category}
                  className="border p-2 rounded-md"
                >
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Social Service">Social Service</option>
                  <option value="Animal Welfare">Animal Welfare</option>
                </select>
              </div>
            )}

            <div>
              <label className="text-gray-700 " htmlFor="location">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                defaultValue={post?.location}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="noOfVolunteer">
                No. of Volunteer Needed
              </label>
              <input
                id="noOfVolunteer"
                name="noOfVolunteer"
                type="number"
                defaultValue={post?.noOfVolunteer}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="description">
              Description
            </label>
            <textarea
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              name="description"
              id="description"
              defaultValue={post?.description}
            ></textarea>
          </div>
          <div className="flex justify-end mt-6">
            <button className=" px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateVolunteerPost;
