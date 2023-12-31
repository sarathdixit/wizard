import { elixirs } from "../../utils/constant";

export default function Problem11() {
  const groupedElixer = elixirs.reduce((acc, elixir) => {
    if (!acc[elixir.difficulty]) {
      acc[elixir.difficulty] = [];
    }
    acc[elixir.difficulty].push(elixir);
    return acc;
  }, {});

  console.log(groupedElixer);

  return (
    <div>
      <h2>
        Grouped Counting: Count the number of elixirs by their difficulty level.
      </h2>
      {Object.entries(groupedElixer).map(([key, value]) => (
        <div key={key}>
          <h2>{`${key} : ${value.length}`}</h2>
        </div>
      ))}
    </div>
  );
}
