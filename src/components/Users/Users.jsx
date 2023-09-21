import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {

    const users = useLoaderData();

    return (
        <div>
            <h2 className="text-4xl font-semibold m-5">Our users {users.length}</h2>
          <div className="grid grid-cols-3 gap-4 mx-20 text-center">
          {
                users.map(user => <User user={user} key={user.id}></User>)
            }
          </div>
        </div>
    );
};

export default Users;