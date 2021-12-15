import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav>
      <li>
        <Link to="/">Gradebooks</Link>
      </li>
      <li>
        <Link to="/teachers">All Professors</Link>
      </li>
      <li>
        <Link to="/my-gradebook">My Gradebook</Link>
      </li>
      <li>
        <Link to="/gradebooks/create">Add Gradebook</Link>
      </li>
    </nav>
  );
}