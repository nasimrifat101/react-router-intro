import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const Navigate = useNavigate();
    const{id, title, body} = post;
    const handleGoBack = () => {
        Navigate(-1);
      };
    return (
        <div>
           <h3>post details about: {id}</h3>
           <p>{title}</p>
           <p>{body}</p>
           <button className='btn btn-primary' onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;