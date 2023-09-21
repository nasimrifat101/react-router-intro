import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const PruralPost = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>posts {posts.length}</h2>
            <div className="grid grid-cols-3 gap-4 mx-20 text-center">

            {
                posts.map(post => <Post post={post} key={post.id}></Post>)
            }
            </div>
        </div>
    );
};

export default PruralPost;