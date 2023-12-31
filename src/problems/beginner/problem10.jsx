import { elixirs } from "../../utils/constant";

export default function Problem10() {
  return (
    <div>
      <h2>
        Data Presentation: Display the name and effect of each elixir in a
        simple table format.
      </h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Effects</th>
          </tr>
        </thead>
        <tbody>
          {elixirs.map((elixir) => (
            <tr key={elixir.id}>
              <td>{elixir.name}</td>
              <td>{elixir.effect}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
