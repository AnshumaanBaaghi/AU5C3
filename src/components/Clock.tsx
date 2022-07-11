import React from "react";
import useClock from "../hooks/useClock";

type Props = {
  //  TODO
  label: String;
};

const Clock = (props: Props) => {
  const { Hours, Minutes, Seconds } = useClock();
  return (
    <div data-testid="clock">
      <h4 data-testid="clock-label">{props.label}</h4>
      <span data-testid="clock-hours">{Hours}</span>:
      <span data-testid="clock-minutes">{Minutes}</span>:
      <span data-testid="clock-seconds">{Seconds}</span>
    </div>
  );
};
export default Clock;
