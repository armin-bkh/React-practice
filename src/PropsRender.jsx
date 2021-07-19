// import React, { Component } from 'react';
// import DesClick from './PdesClickandler';
// import PdesComponent from './PdesComponent';
// import DesHover from './PdesHoverHandler';

// class PRender extends Component{
//     render(){
//         return(
//             <div>
//                 {/* <PdesComponent render={(eventHandler, counter)=> <DesClick desHandler={eventHandler} counter={counter}/>} />
//                 <PdesComponent render={(eventHandler, counter)=> <DesHover desHandler={eventHandler} counter={counter}/>} /> */}
//                 <PdesComponent>
//                     {
//                         (eventHandler, conuter) =>{
//                             return (
//                                 <DesClick desHandler={eventHandler} counter={conuter}/>
//                             )
//                         }
//                     }
//                 </PdesComponent>
//                 <PdesComponent>
//                     {
//                         (eventHandler, conuter) =>{
//                             return (
//                                 <DesHover desHandler={eventHandler} counter={conuter} name={(loggedIn) => (loggedIn) ? "Armin" : "Geust"}/>
//                             )
//                         }
//                     }
//                 </PdesComponent>
//             </div>
//         )
//     }
// }

// export default PRender;

import React, { Component } from "react";
import PdesComponent from "./PdesComponent";
import DesClick from "./PdesClickandler";
import DesHover from "./PdesHoverHandler";

class PRender extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <PdesComponent
          render={(func, counter) => (
            <DesClick decHandler={() => func(100)} counter={counter} />
          )}
        />
        <PdesComponent
          render={(func, counter) => (
            <DesHover decHandler={() => func(10)} counter={counter}  name="Armin" />
          )}
        />
      </>
    );
  }
}

export default PRender;