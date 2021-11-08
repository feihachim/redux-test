const initialState = {
  num: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        num: state.num + action.step,
      };
    case "DECREMENT":
      return {
        ...state,
        num: state.num - action.step,
      };
    default:
      return state;
  }
}

export default counter;
