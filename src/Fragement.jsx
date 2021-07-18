import React, { Component } from 'react';
import TdTable from './TdTable';

class Fragment extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            // <>
            // <React.Fragment>
            //     <p>Reza</p>
            //     <p>Milad</p>
            // </React.Fragment>
            // <React.Fragment>
            //     <p>Reza</p>
            //     <p>Milad</p>
            // </React.Fragment>
            // </>

            <table>
                <tbody>
                    <tr>
                        <TdTable />
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Fragment;