function Button({ value, dispatch }) {
  return <button onClick={dispatch}>{value}</button>;
}

export default Button;
