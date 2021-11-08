import moduleCounter from "../logic/moduleCounter";

const initialState = {
  num: "0",
};

function counter(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return moduleCounter.increment(state, action);
    case "DECREMENT":
      return moduleCounter.decrement(state, action);
    case "ADD_DIGIT":
      return moduleCounter.addDigit(state, action);
    default:
      return state;
  }
}

export default counter;
