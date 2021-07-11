import React from 'react';
import ReactDOM from 'react-dom';
import './Composition.scss';


function Composition(props){
    return(
        <div>
            <p className={"background-" + props.color}>
                hello World
            </p>
            {props.children}
            {props.left}
            {props.Right}
            {props.color}
        </div>
    )
}

function Title(){
    return(
            <Composition color="color" left={<Left />} Right={<Right />}>
                <h1>welcome</h1>
                <p>loremwdsadsagrtddsfasr</p>
            </Composition>
    )
}

function Right(){
    return(
        <h2>bakhshi</h2>
)
}
function Left(){
    return(
        <h2>armin</h2>
)
}
export default Title;