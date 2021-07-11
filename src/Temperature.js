import React from 'react';
import ReactDOM from 'react-dom';
import TemperatureInput from './TemperatureInput';
import { toCelsius } from './Convertor';
import { toFahrenheit } from './Convertor';
import { tryConvert } from './Convertor';



class Temperature extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            scale: 'c',
            temp: ''
        };
    }
    changeHandlerC = (temperature) =>{
        this.setState({
            scale: 'c',
            temp: temperature
        });
    }
    changeHandlerF = (temperature) =>{
        this.setState({
            scale: 'f',
            temp: temperature
        });
    }
    render(){
        const scale = this.state.scale;
        const temperature = this.state.temp;
        let clcious = scale === 'c' ? temperature :  tryConvert(temperature, toCelsius);
        let fahrenheit = scale === 'f' ? temperature :  tryConvert(temperature, toFahrenheit);
        return (
            <React.Fragment>
            <TemperatureInput temperature={clcious} scale="c" changeHandler={this.changeHandlerC} />
            <br />
            <TemperatureInput temperature={fahrenheit} scale="f" changeHandler={this.changeHandlerF} />
            </React.Fragment>
        )
    }
}

export default Temperature;