import React, {Component} from 'react';
import ReactDOM, { createPortal } from 'react-dom';
const PortalComponent = () =>{
    return createPortal(
        <h1>Hello World</h1>,
        document.getElementById('root2')
    )
}
export  {PortalComponent};
const NormalComponent = () =>{
    return(
        <h1>GoodBye World</h1>
    )
}
export  {NormalComponent};