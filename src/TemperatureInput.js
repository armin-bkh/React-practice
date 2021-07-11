import React from 'react';
import  ReactDOM  from 'react-dom';


const Unit = {
    c: 'clcious',
    f: 'farenheit'
};
class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
    }
    tempchangeHandler = (e) =>{
        this.props.changeHandler(e.target.value);
    }
    render(){
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <React.Fragment>
            <label>{Unit[scale]}</label>
            <input type='text' value={temperature} onChange={this.tempchangeHandler} />
            </React.Fragment>
        )
    }
} 


export default TemperatureInput;