import React from "react";
import { useRecoilValue } from "recoil";
import { counterState } from "../recoil/selector";

const Count = () => {
  const count = useRecoilValue(counterState);

  return <div>Count : {count}</div>;
};

export default Count;
