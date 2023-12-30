import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Problem Types:</h1>
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
