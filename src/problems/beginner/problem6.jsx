import { wizards } from "../../utils/constant";

export default function Problem6() {
  return (
    <div>
      <h2>
        Simple Sorting: Sort all wizards by their first name in alphabetical
        order.
      </h2>
      <ol>
        {wizards
          .sort((a, b) => a.firstName?.localeCompare(b.firstName))
          .map((wizard) => (
            <li
              key={wizard.id}
            >{`${wizard?.firstName} ${wizard?.lastName}`}</li>
          ))}
      </ol>
    </div>
  );
}
