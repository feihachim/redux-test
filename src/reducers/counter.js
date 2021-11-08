function increment(state, action) {
  let result;
  result = parseInt(state.num, 10);
  result += action.step;
  return {
    ...state,
    num: result.toString()
  }
}

function decrement(state, action) {
  let result = parseInt(state.num, 10);
  result -= action.step;
  return {
    ...state,
    num: result.toString()
  }
}

function addDigit(state, action) {
  //let result=state.num+action.step;
  let result = parseInt((state.num + action.step), 10);
  return {
    ...state,
    num: result.toString()
  }
}

const initialState = {
  num: "0",
};

function counter(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return increment(state, action);
    case "DECREMENT":
      return decrement(state, action);
    case "ADD_DIGIT":
      return addDigit(state, action);
    default:
      return state;
  }
}

export default counter;
