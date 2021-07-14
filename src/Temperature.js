import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TemperatureInput from './TemperatureInput';
import { toCelsius } from './Convertor';
import { toFahrenheit } from './Convertor';
import { tryConvert } from './Convertor';



// class Temperature extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             scale: 'c',
//             temp: ''
//         };
//     }
//     changeHandlerC = (temperature) =>{
//         this.setState({
//             scale: 'c',
//             temp: temperature
//         });
//     }
//     changeHandlerF = (temperature) =>{
//         this.setState({
//             scale: 'f',
//             temp: temperature
//         });
//     }
//     render(){
//         const scale = this.state.scale;
//         const temperature = this.state.temp;
//         let clcious = scale === 'c' ? temperature :  tryConvert(temperature, toCelsius);
//         let fahrenheit = scale === 'f' ? temperature :  tryConvert(temperature, toFahrenheit);
//         return (
//             <React.Fragment>
//             <TemperatureInput temperature={clcious} scale="c" changeHandler={this.changeHandlerC} />
//             <br />
//             <TemperatureInput temperature={fahrenheit} scale="f" changeHandler={this.changeHandlerF} />
//             </React.Fragment>
//         )
//     }
// }

// export default Temperature;

class Temperature extends Component{
    constructor(){
        super();
        this.state = {
            temp: '',
            scale: ''
        }
    }
    changecHandler = (temp) =>{
        this.setState({
            scale: 'c',
            temp: temp
        });
    }
    changefHandler = (temp) =>{
        this.setState({
            scale: 'f',
            temp: temp
        });
    }
    render(){
        const tempreature = this.state.temp;
        const scale = this.state.scale;
        let celcious = scale === 'c' ? tempreature : tryConvert(tempreature, toCelsius);
        let fahrenheit = scale === 'f' ? tempreature : tryConvert(tempreature, toFahrenheit);
        return (
            <div>
                <TemperatureInput temp={celcious} scale='c' changeTemp={this.changecHandler} />
                <br />
                <TemperatureInput temp={fahrenheit} scale='f' changeTemp={this.changefHandler} />
            </div>
        )
    }
}

export default Temperature;