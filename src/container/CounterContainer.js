import Counter from "../component/Counter"
import * as actions from "../action"
import { connect } from 'react-redux'

export function getRandColor () {
    const color = [
        '#fffff',
        '#00000',
        '#ff0000',
        '#00ff00',
        '#0000ff'
    ];

    return (color[Math.floor(Math.random() * 5)]);
}

const mapStateToProps = (state) => ({
    color   : state.color,
    number  : state.number
});

const mapDispatch = (dispath) => ({
    onInCrement : () => dispath(actions.increment()),
    onDecrement : () => dispath(actions.decrement()),
    onSetColor  : () => {const color = getRandColor();dispath(actions.setColor())}
});

const CounterContainer = connect(
    mapStateToProps,
    mapDispatch
)(Counter);

export default CounterContainer;
