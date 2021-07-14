import React from 'react';
import {UseProvider, UseConsumer} from './Context';



const About = () =>{
    return (
        <React.Fragment>
        <h1>About Us</h1>
        {/* <UseConsumer>
            {
                (val)=>{
                   return <h1>hello {val}</h1>
                }
            }
        </UseConsumer> */}
        </React.Fragment>
    )
}


export default About;