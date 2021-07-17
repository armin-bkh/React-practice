import React, {Component} from 'react';
import  ReactDOM  from 'react-dom';


// const Unit = {
//     c: 'clcious',
//     f: 'farenheit'
// };
// class TemperatureInput extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     tempchangeHandler = (e) =>{
//         this.props.changeHandler(e.target.value);
//     }
//     render(){
//         const temperature = this.props.temperature;
//         const scale = this.props.scale;
//         return (
//             <React.Fragment>
//             <label>{Unit[scale]}</label>
//             <input type='text' value={temperature} onChange={this.tempchangeHandler} />
//             </React.Fragment>
//         )
//     }
// } 
// export default TemperatureInput;

// const Unit = {
//     c: "celcious",
//     f: "fahrenheit"
// }
// class TempratureInput extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             scale: '',
//             temp: '',
//             func: ''
//         }
//     }
//     static getDerivedStateFromProps(props, state){
//         return{
//             scale: props.scale,
//             temp: props.temp,
//             func: props.changeTemp
//         }
//     }
//     changeHandler = (e) =>{
//         this.state.func(e.target.value);
//     }
//     render(){
//         let value = this.state.temp;
//         let scale = this.state.scale;
//         return(
//             <React.Fragment>
//                 <label>{Unit[scale]}</label>
//                 <input type="text" value={value} onChange={this.changeHandler} />
//             </React.Fragment>
//         )
//     }
// }


class TemperatureInput extends Component{
    constructor(props){
        super(props);
        this.Unit = {
            c: 'Celcious',
            f: 'fahrenheit'
        }
    }
    changeHandler = (e) =>{
        this.props.change(e.target.value);
    }
    render(){
        return(
            <React.Fragment>
                <label>{this.Unit[this.props.scale]}</label>
                <input type="text" value={this.props.val} onChange={this.changeHandler}/>
            </React.Fragment>
        )
    }
}
export default TemperatureInput;