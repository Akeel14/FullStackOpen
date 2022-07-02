import React from "react";

export default function Filter({ setFilter }) {
  return (
    <div>
      filter shown with:{" "}
      <input onChange={(event) => setFilter(event.target.value)} />
    </div>
  );
}
