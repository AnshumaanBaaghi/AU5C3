import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List1Props = {
  // TODO
  label: String;
  initalValues: number[];
};
const List1 = (props: List1Props) => {
  const [num, setNum] = useState("");
  const { list, appendStart, popEnd, clear, reset } = useNumberList(
    props.initalValues
  );
  return (
    <div data-testid="list1" style={{ border: "solid gray", padding: "40px" }}>
      <h3 data-testid="list1-label">{props.label}</h3>
      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list1-element" style={{ margin: "10px" }}>
        {/* Each element in a list */}
        {list.map((el) => (
          <span style={{ margin: "3px" }}>{el}</span>
        ))}
      </div>

      <input
        data-testid="list1-input"
        onChange={(e) => setNum(e.target.value)}
        value={num}
      />
      <button
        data-testid="list1-btn-append-start"
        onClick={() => {
          appendStart(+num);
          setNum("");
        }}
      >
        {/* Append to start of list btn */}
        Append Start
      </button>
      <button data-testid="list1-btn-pop-end" onClick={() => popEnd()}>
        {/* po last element btn */}
        Pop End
      </button>
      <button data-testid="list1-btn-clear" onClick={() => clear()}>
        {/* clear list and set empty button */}
        Clear
      </button>
      <button data-testid="list1-btn-reset" onClick={() => reset()}>
        {/* Reset list to default value btn */}
        Reset
      </button>
    </div>
  );
};

export default List1;
