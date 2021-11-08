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

const counterAction = { increment, decrement };

export default counterAction;
