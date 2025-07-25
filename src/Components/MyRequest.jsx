import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import { format } from "date-fns";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyRequest = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    fetchAllPost();
  }, [user]);

  const fetchAllPost = async () => {
    const { data } = await axiosSecure.get(`/applications/${user?.email}`);
    setPosts(data);
  };

  //   delete functionality
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/application/${id}`);

      toast.success("Your Request Deleted Successfully!!!");
      fetchAllPost();
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const modernDelete = (id) => {
    toast((t) => (
      <div className="flex gap-3 items-center">
        <div>
          <p>
            Are you <b>sure?</b>
          </p>
        </div>
        <div className="flex gap-2">
          <button
            className="bg-red-400 text-white px-3 py-1 rounded-md"
            onClick={() => {
              toast.dismiss(t.id);
              handleDelete(id);
            }}
          >
            Yes
          </button>
          <button
            className="bg-green-400 text-white px-3 py-1 rounded-md"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <section className="my-4">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 ">
            My Volunteer Request Posts
          </h2>

          <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
            {posts.length} Request
          </span>
        </div>

        <div className="flex flex-col mt-6">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold text-gray-600">
                No Requests Found
              </h2>
              <p className="text-gray-500 mt-2">
                You haven't requested to volunteer for any post yet.
              </p>
            </div>
          ) : (
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          <div className="flex items-center gap-x-3">
                            <span>Title</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          <span>Deadline</span>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          <div className="flex items-center gap-x-2 justify-center">
                            <span>Location</span>
                          </div>
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                        >
                          Status
                        </th>

                        <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 ">
                      {/* Generate dynamic tr */}
                      {posts.map((post) => (
                        <tr key={post._id}>
                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {post.title}
                          </td>

                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {format(new Date(post.deadline), "P")}
                          </td>

                          <td className="px-4 text-center py-4 text-sm text-gray-500  whitespace-nowrap">
                            {post.location}
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-2">
                              <p
                                className={`px-3 py-1 text-xs rounded-full
            ${
              post.category === "Social Service" &&
              "text-blue-500 bg-blue-100/60"
            }
            ${
              post.category === "Animal Welfare" &&
              "text-green-500 bg-green-100/60"
            }
            ${post.category === "Healthcare" && "text-red-500 bg-red-100/60"}
            ${
              post.category === "Education" &&
              "text-yellow-500 bg-yellow-100/60"
            }
          `}
                              >
                                {post.category}
                              </p>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {post.status}
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="">
                              <button
                                onClick={() => modernDelete(post._id)}
                                className="text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-5 h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MyRequest;
