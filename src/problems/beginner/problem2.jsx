import { elixirs } from "../../utils/constant";

export default function Problem2() {
  return (
    <div>
      <h2>
        Simple Search: Find all elixirs invented by &quot;Fred Weasley&quot;.
      </h2>
      <ol>
        {elixirs
          .filter((elixir) =>
            elixir.inventors.some(
              (inventor) =>
                inventor.firstName == "Fred" && inventor.lastName == "Weasley"
            )
          )
          .map((elixir) => (
            <li key={elixir.id}>{elixir.name}</li>
          ))}
      </ol>
    </div>
  );
}
