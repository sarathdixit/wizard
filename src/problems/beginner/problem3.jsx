import { elixirs } from "../../utils/constant";

export default function Problem3() {
  return (
    <div>
      <h2>
        Data Counting: Count the number of elixirs that have &quot;unknown&quot;
        difficulty.
      </h2>
      <ol>
        {elixirs
          .filter((elixir) => elixir.difficulty === "Unknown")
          .map((elixir) => (
            <li key={elixir.id}>{elixir.name}</li>
          ))}
      </ol>
    </div>
  );
}
