import React, { Component, forwardRef } from "react";

// class RefInp extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             inp: React.createRef(),
//         }
//     }
//     focusInput = () =>{
//         this.state.inp.current.focus();
//     }
//     render(){
//         const state = this.state;
//         return (
//             <div>
//                 <label>name:</label>
//                 <input type="text" ref={state.inp}/>
//             </div>
//         )
//     }
// }

const RefInp = forwardRef((props, ref)=>{
    return(
        <div>
            <label>name:</label>
            <input type="text" ref={ref}/>
        </div>
    )
});

export default RefInp;