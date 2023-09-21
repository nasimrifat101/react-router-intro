/* eslint-disable react/prop-types */

import { Link, useNavigate,} from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;
  const Navigate = useNavigate();

  const handleShowDetails = () => {
    Navigate(`/post/${id}`);
  };

  return (
    <div className="border-2 border-green-300 p-5 rounded-xl m-5 ">
      <h2>{id}</h2>
      <h2>{title}</h2>
      <Link to={`/post/${id}`}>Show Details</Link>
      <Link className="btn btn-accent" to={`/post/${id}`}>
        Details
      </Link>
      <button onClick={handleShowDetails}>Click to show details</button>
    </div>
  );
};

export default Post;
