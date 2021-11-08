import "../styles/App.css";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../actions";

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
  return (
    <div className="App">
      <button onClick={handleDecrement}>Decrement</button>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;
