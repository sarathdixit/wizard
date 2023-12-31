import { elixirs } from "../../utils/constant";

export default function Problem4() {
  return (
    <div>
      <h2>Basic Filtering: List all elixirs with no side effects.</h2>
      <ol>
        {elixirs
          .filter((elixir) => !elixir.sideEffects)
          .map((elixer) => (
            <li key={elixer.id}>{elixer.name}</li>
          ))}
      </ol>
    </div>
  );
}
