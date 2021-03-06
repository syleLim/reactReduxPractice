import * as types from '../action/ActionTypes'

const initialState = {
    color : 'black',
    number : 0
};

const counter = (state = initialState, action) => {
    switch (action.type) {
        case types.INCREMENT :
            return {
                ...state,
                number : state.number + 1
            };
        case types.DECREMENT :
            return {
                ...state,
                number : state.number - 1
            };
        case types.SET_COLOR :
            return {
                ...state,
                color : action.color
            };
        default :
            return (state);
    }
};

export default counter;