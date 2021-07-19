import React, {Component} from 'react';
import { NormalComponent, PortalComponent } from './PortalComponent';

const PortalC = () =>{
    return(
        <>
        <PortalComponent />
        <NormalComponent />
        </>
    )
}

export default PortalC;