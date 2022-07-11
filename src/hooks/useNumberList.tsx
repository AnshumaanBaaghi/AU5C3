import { useState } from "react";

const useNumberList = (initialArray: number[]) => {
  // const l1 = [1, 2, 3];
  // TODO
  // refer readme.md for what to return
  const [list, setList] = useState(initialArray);
  console.log("list:", list);
  const appendStart = (num: number) => {
    let arr = [num];
    for (let i = 0; i < list.length; i++) {
      arr.push(list[i]);
    }
    setList(arr);
  };
  const appendEnd = (num: number) => {
    let arr = [];
    for (let i = 0; i < list.length; i++) {
      arr.push(list[i]);
    }
    arr.push(num);
    setList(arr);
  };
  const popStart = () => {
    let arr = [];
    for (let i = 1; i < list.length; i++) {
      arr.push(list[i]);
    }
    setList(arr);
  };
  const popEnd = () => {
    let arr = [];
    for (let i = 0; i < list.length - 1; i++) {
      arr.push(list[i]);
    }
    setList(arr);
  };
  const clear = () => {
    setList([]);
  };
  const reset = () => {
    setList(initialArray);
  };
  return { list, appendStart, appendEnd, popStart, popEnd, clear, reset };
};

export default useNumberList;
