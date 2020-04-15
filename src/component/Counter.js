import React from "react"
import PropTypes from "prop-types"
import { CounterStyle } from "../style/CounterStyle"

const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => (
    <CounterStyle onClick={onIncrement}
            onContextMenu={e => {
                e.preventDefault();
                onDecrement();
            }}
            onDoubleClick={onSetColor}
            style={{
                backgroundColor : color
            }}>
        {number}
    </CounterStyle>
);

Counter.propTypes = {
    number : PropTypes.number,
    color : PropTypes.string,
    onIncrement : PropTypes.func,
    onDecrement : PropTypes.func,
    onSetColor : PropTypes.func
};

Counter.defaultProps = {
    number : 0,
    color : "black",
    onIncrement : () => console.warn("not inc"),
    onDecrement : () => console.warn("not dec"),
    onSetColor  : () => console.warn("not setc")
};

export default Counter;