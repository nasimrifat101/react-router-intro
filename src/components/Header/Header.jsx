import { NavLink } from "react-router-dom";
import "./header.css"

const Header = () => {
  return (
    <div>
      <span>My Website</span>
      <nav className="space-x-3 text-xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
    </div>
  );
};

export default Header;
