import React from "react";

export default function Persons({ persons, filter, deletePerson }) {
  return (
    <>
      <table>
        <tbody>
          {persons
            .filter((person) =>
              person.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map((person) => (
              <tr key={person.id}>
                <td>{person.name}</td>
                <td>{person.number}</td>
                <td>
                  <button onClick={() => deletePerson(person.id)}>
                    delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
