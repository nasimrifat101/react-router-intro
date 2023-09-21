import { Link } from "react-router-dom";

const User = ({user}) => {

    const {id, name, email, phone} = user;

    return (
        <div className="border-2 border-green-300 p-5 rounded-xl m-5 ">
            <h2 className="text-2xl font-bold">{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link className="btn btn-secondary" to={`/user/${id}`}>Click Me</Link>
        </div>
    );
};

export default User;