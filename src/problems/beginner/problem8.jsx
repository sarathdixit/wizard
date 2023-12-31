import { elixirs } from "../../utils/constant";

export default function Problem8() {
  return (
    <div>
      <h2>
        Basic Aggregation: Calculate the total number of ingredients used in all
        elixirs.
      </h2>
      {elixirs.map((elixer) => (
        <li
          key={elixer.id}
        >{`${elixer.name}: ${elixer.ingredients.length}`}</li>
      ))}
    </div>
  );
}
