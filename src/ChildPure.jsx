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

// const ChildPure = ({ update }) => {
//   console.log("ChildPure", update);
//   return <h1>Pure Component</h1>;
// };

// export default React.memo(ChildPure);

// class MemoComponent extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       //   update: 1,
//       update: false,
//     };
//   }
//   componentDidMount() {
//     setInterval(() => {
//       //   if (this.state.update <= 10) {
//       //     this.setState((prevState) => {
//       //       return { update: prevState.update + 1 };
//       //     });
//       //   }
//     //   this.setState((prevState) => {
//     //     return { update: !prevState.update };
//     //   });
//       this.setState({ update: true });
//     }, 3500);
//   }
//   render() {
//       console.log('updated');
//     return (
//       <>
//         <h1>Hello World {this.state.update}</h1>
//         <p>
//           fqerifjdsnvsldueriopmdkvnkdfhkaldsakmavlautiehtkfladslfjweoj
//           fdasfsdfasdfsdfsdfasdgdfhryrtjfgbcxvdteryrtjghfgfdgdfgdfgdfgree
//           nbvnlpl[rieowur9uriowej24iou732ueiojnvcxnvmsldajd;akfjdiupwerui
//           mvcxklvjqwleji12u49uiaosdmlmxz;xakdksaofjidjshjvnxcjkghduydfsfu
//         </p>
//       </>
//     );
//   }
// }

// export default React.memo(MemoComponent);

const MemoComponent = () => {
  const [ update, setUpdate ] = useState("reza");
  setInterval(() => {
    setUpdate("hamid")
  }, 3500);
  console.log("updated");
  return (
    <>
      <h1>Hello {update}</h1>
      <p>
        fqerifjdsnvsldueriopmdkvnkdfhkaldsakmavlautiehtkfladslfjweoj
        fdasfsdfasdfsdfsdfasdgdfhryrtjfgbcxvdteryrtjghfgfdgdfgdfgdfgree
        nbvnlpl[rieowur9uriowej24iou732ueiojnvcxnvmsldajd;akfjdiupwerui 
        mvcxklvjqwleji12u49uiaosdmlmxz;xakdksaofjidjshjvnxcjkghduydfsfu
      </p>
    </>
  );
};

export default React.memo(MemoComponent);
// export default MemoComponent;
