import React from "react";

export default function Total(totals) {
  const totalAmount = totals.exercises.reduce((sum, total) =>  sum + total, 0)
  return (
    <div>
      <b>total of {totalAmount} exercises</b>
    </div>
  );
}
