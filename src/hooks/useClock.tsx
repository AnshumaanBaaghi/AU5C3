import { useState } from "react";

const useClock = () => {
  // TODO
  // refer readme.md for what to return
  const today = new Date();
  const [Hours, setHours] = useState(today.getHours());
  const [Minutes, setMinutes] = useState(today.getMinutes());
  const [Seconds, setSeconds] = useState(today.getSeconds());
  // const Hours = today.getHours();
  // const Minutes = today.getMinutes();
  // const Seconds = today.getSeconds();
  // const time = () => {
  //   let H = today.getHours();
  //   let M = today.getMinutes();
  //   let S = today.getSeconds();
  //   setHours(H);
  //   setMinutes(M);
  //   setSeconds(() => S);
  // };
  // setInterval(() => {
  //   time();
  // }, 1000);
  return { Hours, Minutes, Seconds };
};

export default useClock;
