import React from 'react'
import { connect } from 'react-redux'

function Contact(props) {

    return (<>
        <hr />
        <h4>Counter: {props.counter}</h4>
        <hr />
        <button onClick={() => props.reset()}>Reset</button>
    </>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => dispatch({ type: 'RESET' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)