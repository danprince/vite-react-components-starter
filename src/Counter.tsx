import * as React from "react";
import { FC, useState } from "react";

export const Counter: FC = () => {
  let [count, setCount] = useState(0);
  let inc = () => setCount(n => n + 1);
  let dec = () => setCount(n => n - 1);

  return (
    <>
      <button onClick={dec}>-</button>
      {count}
      <button onClick={inc}>+</button>
    </>
  );
}
