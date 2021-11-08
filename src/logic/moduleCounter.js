const moduleCounter = (() => {
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
        let result = parseInt((state.num + action.step), 10);
        return {
            ...state,
            num: result.toString()
        }
    }

    return { increment, decrement, addDigit }
})();

export default moduleCounter