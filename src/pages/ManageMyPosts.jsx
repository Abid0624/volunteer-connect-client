import MyPost from "../Components/MyPost";
import MyRequest from "../Components/MyRequest";

const ManageMyPosts = () => {
  return (
    <div className="w-11/12 px-4 mx-auto pt-12">
      {/* My volunteer need posts */}
      <MyPost></MyPost>

      {/* My Volunteer Request Post */}
      <MyRequest></MyRequest>
    </div>
  );
};

export default ManageMyPosts;
