import React from 'react'
import { connect } from 'react-redux'

function Home(props) {

    console.log(props.counter);
    return (<>
        <h1>Counter: {props.counter}</h1>
        <button onClick={() => props.increment()}>+</button>
        <button onClick={() => props.decrement()}>-</button>
        
    </>)
}


const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: 'INCREMENT' }),
        decrement: () => dispatch({ type: 'DECREMENT' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)