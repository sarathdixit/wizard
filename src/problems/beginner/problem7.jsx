import { wizards } from "../../utils/constant";

export default function Problem7() {
  return (
    <div>
      <h2>
        Extracting Data: List the first names of all wizards who have invented
        an elixir.
      </h2>
      {wizards
        .filter((wizard) => wizard.elixirs.length > 0)
        .map((wizard) => (
          <li key={wizard.id}>{wizard.firstName ?? "No first name"}</li>
        ))}
    </div>
  );
}
