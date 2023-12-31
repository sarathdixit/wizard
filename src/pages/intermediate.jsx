import { Link, Outlet } from "react-router-dom";

export default function Intermediate() {
  return (
    <div>
      <h2>Intermediate</h2>
      <nav>
        <ol>
          <li>
            <Link to={`problem11`}>
              Grouped Counting: Count the number of elixirs by their difficulty
              level.
            </Link>
          </li>
        </ol>
      </nav>
      <Outlet />
    </div>
  );
}
