import React from "react";
import { useRecoilState } from "recoil";
import { textState as textAtom } from "../recoil/atoms";

const Input = () => {
  const [text, setText] = useRecoilState(textAtom);

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={changeHandler} />
      <p>Echo : {text}</p>
    </div>
  );
};

export default Input;
