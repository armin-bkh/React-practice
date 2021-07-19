import React, { Component } from 'react';
import Modal from './MyModal';


const HOCModal = (OrignalComponent)=>{
    class Nhocmodal extends Component{
        constructor(){
            super();
            this.state = {
                modalOpen: false
            }
        }
        toggleModal = () =>{
            this.setState((prevState)=>{
                return{modalOpen: !prevState.modalOpen}
            });
        }
        render(){
            let modal;
            if(this.state.modalOpen){ modal = <Modal />}
            else modal = '';
            return(
                <>
                <OrignalComponent toggleM={this.toggleModal} />
                {modal}
                </>
            )
            
        }
    }
    return Nhocmodal
}

export default HOCModal;