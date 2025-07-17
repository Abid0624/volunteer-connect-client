import { Link } from "react-router-dom";
import { format } from "date-fns";

const PostCard = ({ post }) => {
  const { _id, title, category, deadline, location, noOfVolunteer, thumbnail } =
    post;

  return (
    <div className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all flex flex-col">
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-2"
      />

      <div className="flex items-center justify-between">
        <span className="text-xs font-light text-gray-800">
          Deadline: {format(new Date(deadline), "P")}
        </span>
        <span className="px-3 py-1 text-[10px] text-blue-800 uppercase bg-blue-200 rounded-full">
          {category}
        </span>
      </div>

      <div className="flex-1 flex flex-col justify-between mt-2">
        <div>
          <h1 className="text-lg font-semibold text-gray-800">{title}</h1>
          <p className="mt-2 text-sm text-gray-600">Location: {location}</p>
          <p className="text-sm text-gray-600">
            Volunteers Needed: {noOfVolunteer}
          </p>
        </div>

        <Link
          to={`/job/${_id}`}
          className="btn
           mt-4 px-4 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
