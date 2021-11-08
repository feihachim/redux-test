const increment = (value) => {
  return {
    type: "INCREMENT",
    step: value,
  };
};

const decrement = (value) => {
  return {
    type: "DECREMENT",
    step: value,
  };
};

const addDigit = (value) => {
  return {
    type: "ADD_DIGIT",
    step: value
  }
}

const counterAction = { increment, decrement, addDigit };

export default counterAction;
