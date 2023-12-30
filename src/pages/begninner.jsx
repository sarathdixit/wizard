import { Link, Outlet } from "react-router-dom";

export default function Begninner() {
  return (
    <div>
      <h2>Begninner</h2>
      <nav>
        <ul>
          <li>
            <Link to={`problem1`}>
              List Creation: Create a list of all elixir names
            </Link>
          </li>
          <li>
            <Link to={`intermediate`}>Intermediate</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
