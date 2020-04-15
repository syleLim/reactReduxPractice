import * as types from './ActionTypes'

const increment = () => ({
    type : types.increment
});

const decrement = () => ({
    type : types.DECREMENT
});

const setColor = (color) => ({
    type : types.SET_COLOR,
    color
});

export { increment, decrement, setColor };