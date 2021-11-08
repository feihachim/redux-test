import "../styles/App.css";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../actions";
import Button from "./Button";
import Display from "./Display";

function App() {
  const counter = useSelector((state) => {
    console.log("State: " + state.counter.num);
    return state.counter.num;
  });
  const dispatch = useDispatch();

  function handleIncrement(e) {
    dispatch(allActions.counterAction.increment(1));
  }

  function handleDecrement(e) {
    dispatch(allActions.counterAction.decrement(1));
  }

  function handleDigit(e) {
    dispatch(allActions.counterAction.addDigit(1));
  }

  return (
    <div className="App">
      <Button value="Decrement" dispatch={handleDecrement} />
      <Display output={counter} />
      <Button value="Increment" dispatch={handleIncrement} />
      <Button value="Add digit" dispatch={handleDigit} />
    </div>
  );
}

export default App;
