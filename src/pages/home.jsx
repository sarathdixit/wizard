import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>Database</h2>
      <ul>
        <li>
          <Link to={`Wizards`}>Wizards</Link>
        </li>
        <li>
          <Link to={`elixers`}>Elixers </Link>
        </li>
      </ul>
      <h2>Problem Type:</h2>
      <nav>
        <ul>
          <li>
            <Link to={`beginner`}>Beginner</Link>
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
