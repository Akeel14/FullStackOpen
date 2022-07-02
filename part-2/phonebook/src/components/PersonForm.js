import React from "react";

export default function PersonForm({
  addNameNumber,
  handleNameChange,
  handleNumberChange,
}) {
  return (
    <div>
      <form onSubmit={addNameNumber}>
        <div>
          name:
          <input onChange={handleNameChange} />
        </div>

        <div>
          number: <input onChange={handleNumberChange} />
        </div>

        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}
