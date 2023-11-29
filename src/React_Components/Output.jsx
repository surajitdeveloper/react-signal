// React Imports
import React from 'react';
import { setWeather } from '../Redux/actions/setWeatherActions';
import { submitValue } from '../Redux/actions/submittedValueActions';
import { todoList } from "../Api/Api"
// Redux Imports
import { connect } from 'react-redux';

const Output = (props) => {

    const callTodo = async () =>
    {
        const apiData = await todoList()
        // console.log("apidata --->", apiData)
        props.setWeatherAction(apiData)
        props.onSubmitValue('');
    }
    React.useEffect(() => {

        callTodo()

          
      }, [])
    const reverseString = (input) => {
        return input.split('').reverse().join('');
    }
    return (
        <div>
            Output: {reverseString(typeof props.submittedValue === 'string' ? props.submittedValue : '')}
        </div>
    );
}

const mapStateToProps = state => {
    // console.log("state --->", state)
    return state;
}

const mapActionsToProps = {
    setWeatherAction: setWeather,
    onSubmitValue: submitValue
}

// Connecting mapStateToProps lets this component get state from the Redux Store as this.props
export default connect(mapStateToProps, mapActionsToProps)(Output);