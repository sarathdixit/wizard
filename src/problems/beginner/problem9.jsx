import { elixirs, wizards } from "../../utils/constant";

export default function Problem9() {
  const WizardsDetail = wizards.map((wizards) => {
    return {
      ...wizards,
      elixirs: wizards.elixirs.map((elixir) =>
        elixirs.find((el) => el.id == elixir.id)
      ),
    };
  });
  return (
    <div>
      <h2>
        Simple Join: Match each wizard with their corresponding elixir(s).
      </h2>
      <ol>
        {WizardsDetail.map((wizard) => (
          <div key={wizard.id}>
            <li key={wizard.id}>{wizard.firstName}</li>
            <ul>
              {wizard?.elixirs.map((elixir) => (
                <li key={elixir.id}>{elixir.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </ol>
    </div>
  );
}
