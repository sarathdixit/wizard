import { elixirs } from "../../utils/constant";

export default function Problem5() {
  return (
    <div>
      <h2>
        String Matching: Find all elixirs whose names contain the word
        &quot;Potion&quot;.
      </h2>
      <ol>
        {elixirs
          .filter((elixer) => elixer.name.includes("Potion"))
          .map((elixer) => (
            <li key={elixer.id}>{elixer.name}</li>
          ))}
      </ol>
    </div>
  );
}
