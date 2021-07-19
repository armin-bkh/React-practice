import React, { PureComponent, useState } from "react";

// class ChildPure extends PureComponent{
//     constructor(){
//         super();
//     }
//     render(){
//         console.log("ChildPure");
//         return(
//             <h1>Pure Component</h1>
//         )
//     }
// }
// export default ChildPure;

// const ChildPure = ({ update }) => {
//   console.log("ChildPure", update);
//   return <h1>Pure Component</h1>;
// };

// export default React.memo(ChildPure);

const  MemoComponent = ({props}) => {
    const [Update, setUpdate] = useState(false); 
    // const [Update, setUpdate] = useState(1);
    setInterval(() => {
      setUpdate(true);
      // setUpdate(!Update);
      // setUpdate(Update + 1);
    }, 3500);
    console.log('updated');
    return (
      <>
        <h1>Hello World {Update}</h1>
        <p>
          fqerifjdsnvsldueriopmdkvnkdfhkaldsakmavlautiehtkfladslfjweoj
          fdasfsdfasdfsdfsdfasdgdfhryrtjfgbcxvdteryrtjghfgfdgdfgdfgdfgree
          nbvnlpl[rieowur9uriowej24iou732ueiojnvcxnvmsldajd;akfjdiupwerui
          mvcxklvjqwleji12u49uiaosdmlmxz;xakdksaofjidjshjvnxcjkghduydfsfu
        </p>
      </>
    )
    
}

export default React.memo(MemoComponent);

// const MemoComponent = () => {
//   const [ update, setUpdate ] = useState("reza");
//   setInterval(() => {
//     setUpdate("hamid")
//   }, 3500);
//   console.log("updated");
//   return (
//     <>
//       <h1>Hello {update}</h1>
//       <p>
//         fqerifjdsnvsldueriopmdkvnkdfhkaldsakmavlautiehtkfladslfjweoj
//         fdasfsdfasdfsdfsdfasdgdfhryrtjfgbcxvdteryrtjghfgfdgdfgdfgdfgree
//         nbvnlpl[rieowur9uriowej24iou732ueiojnvcxnvmsldajd;akfjdiupwerui 
//         mvcxklvjqwleji12u49uiaosdmlmxz;xakdksaofjidjshjvnxcjkghduydfsfu
//       </p>
//     </>
//   );
// };

// export default React.memo(MemoComponent);
// export default MemoComponent;
