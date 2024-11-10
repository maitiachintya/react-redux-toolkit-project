import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counter/CounterSlice"; // Adjust the path

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const msg = useSelector((state) => state.counter.msg);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Redux Counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      {msg && <h3>{msg}</h3>}
    </div>
  );
};

export default CounterView;
