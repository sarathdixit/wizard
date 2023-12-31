import { Link, Outlet } from "react-router-dom";

export default function Begninner() {
  return (
    <div>
      <h2>Begninner</h2>
      <nav>
        <ol>
          <li>
            <Link to={`problem1`}>
              List Creation: Create a list of all elixir names
            </Link>
          </li>
          <li>
            <Link to={`problem2`}>
              Simple Search: Find all elixirs invented by &quot;Fred
              Weasley&quot;.
            </Link>
          </li>
          <li>
            <Link to={`problem3`}>
              Data Counting: Count the number of elixirs that have
              &quot;unknown&quot; difficulty.
            </Link>
          </li>
          <li>
            <Link to={`problem4`}>
              Basic Filtering: List all elixirs with no side effects.
            </Link>
          </li>
          <li>
            <Link to={`problem5`}>
              String Matching: Find all elixirs whose names contain the word
              &quot;Potion&quot;.
            </Link>
          </li>
          <li>
            <Link to={`problem6`}>
              Simple Sorting: Sort all wizards by their first name in
              alphabetical order.
            </Link>
          </li>
          <li>
            <Link to={`problem7`}>
              Extracting Data: List the first names of all wizards who have
              invented an elixir.
            </Link>
          </li>
          <li>
            <Link to={`problem8`}>
              Basic Aggregation: Calculate the total number of ingredients used
              in all elixirs.
            </Link>
          </li>
          <li>
            <Link to={`problem9`}>
              Simple Join: Match each wizard with their corresponding elixir(s).
            </Link>
          </li>
          <li>
            <Link to={`problem10`}>
              Data Presentation: Display the name and effect of each elixir in a
              simple table format.
            </Link>
          </li>
        </ol>
      </nav>
      <Outlet />
    </div>
  );
}
