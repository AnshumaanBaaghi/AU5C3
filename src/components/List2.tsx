import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List2Props = {
  // TODO
  label: String;
  initalValues: number[];
};
const List2 = (props: List2Props) => {
  const [num, setNum] = useState("");
  const { list, appendEnd, popStart, clear, reset } = useNumberList(
    props.initalValues
  );
  return (
    <div data-testid="list2" style={{ border: "solid gray", padding: "40px" }}>
      <h3 data-testid="list2-label">
        {/* Label */}
        {props.label}
      </h3>

      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list2-element" style={{ margin: "10px" }}>
        {/* Each element in a list */}
        {list.map((el) => (
          <span style={{ margin: "3px" }}>{el}</span>
        ))}
      </div>

      <input
        data-testid="list2-input"
        onChange={(e) => setNum(e.target.value)}
        value={num}
      />
      <button
        data-testid="list2-btn-append-end"
        onClick={() => {
          appendEnd(+num);
          setNum("");
        }}
      >
        {/* Button to append new number to the end of the list */}
        Append End
      </button>
      <button data-testid="list2-btn-pop-start" onClick={() => popStart()}>
        {/* Button to  pop first element of the list */}
        Pop Start
      </button>
      <button data-testid="list2-btn-clear" onClick={() => clear()}>
        {/* Button to  clear the list */}
        Clear
      </button>
      <button data-testid="list2-btn-reset" onClick={() => reset()}>
        Reset
        {/* Button to  reset the list to initialValue */}
      </button>
    </div>
  );
};

export default List2;
