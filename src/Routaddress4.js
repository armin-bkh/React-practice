import react, { Component } from 'react';
import { UseConsumer } from './Context';
import { UseContext } from './Context';




class Www extends Component {
    static contextType = UseContext;
    render(){
        const context = this.context;
        return(
            <div>
                {/* <UseConsumer>
                    {
                        (val)=>{
                            return( <h1>WWW.{val}.com</h1>)
                        }
                    }
                 </UseConsumer> */}
                <h1>WWW.{context}.com</h1>
            </div>
        )
    }
}
export default Www;