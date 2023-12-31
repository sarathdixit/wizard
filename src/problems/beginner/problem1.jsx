import { elixirs } from "../../utils/constant";

export default function Problem1() {
  return (
    <div>
      <h2>All Exliers Name:</h2>
      <ol>
        {elixirs.map((elixer) => (
          <li key={elixer.id}>{elixer.name}</li>
        ))}
      </ol>
    </div>
  );
}
