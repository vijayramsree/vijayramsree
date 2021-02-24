import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "hundredify":
      return { count: state.count + 100 };
    default:
      return state.count;
  }
};

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>Plus +1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Minus -1</button>
      <button onClick={() => dispatch({ type: "hundredify" })}>Plus 100</button>
    </div>
  );
}

export default function App() {
  return <Counter />;
}
