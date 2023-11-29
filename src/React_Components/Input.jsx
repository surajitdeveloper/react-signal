// React Imports
import * as React from 'react';
// Redux Imports
import { connect } from 'react-redux';
import { submitValue } from '../Redux/actions/submittedValueActions';

const Input = (props) => {
    
    const [inputValue, setInputValue] = React.useState(props.defaultInput)
   

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = async (event) => {
        props.onSubmitValue(inputValue);
        event.preventDefault();
    }

    const handleReset = (event) => {
        setInputValue('')
        props.onSubmitValue(inputValue);
        event.preventDefault();
    }


    return (
        <div>
            <div className='form-section'>
                <form onSubmit={e=> handleSubmit(e)} onReset={e=> handleReset(e)}>
                    <label>
                        Input: <input type="text" value={inputValue} onChange={e=>handleChange(e)} />
                    </label>
                    <input type="submit" value="Submit" />
                    <input type="reset" value="Clear" />
                </form>
            </div>
            <div className='todo'>
                {JSON.stringify(props.todo)}
            </div>
        </div>
    );
}


const mapStateToProps = (state, props) => {
    // console.log("state --->", state)
    // console.log("props --->", props)
    return {
        defaultInput: props.defaultInput + ' ' + state.submittedValue,
        todo: state.setWeather
    };
};

// onSubmitValue is used to avoid naming conflicts with submitValue
const mapActionsToProps = {
    onSubmitValue: submitValue
}

export default connect(mapStateToProps, mapActionsToProps)(Input);