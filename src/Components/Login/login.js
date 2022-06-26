import React from "react";
// import Modal from 'react-modal';
import "./login.css"
import {Modal, ModalBody} from "reactstrap"
import backgroundImage from "./Assets/background.png"
import ActiveButton from "./Assets/ActiveButton.png"

export const Access = (props) => {
    const [type,setType] = React.useState("login")
    return (
        <>
            <Modal
                style={{position:"absolute", top:"50%",left:"25%",margin:"auto"}}
                isOpen={props.modalIsOpen}
                centered
            >
                <ModalBody>
                    <div style={{display:"flex", flexDirection:"row"}}>
                        <div style={{backgroundColor:"#FFB349"}} className="orange">
                            <img style={{width:"300px",height:"500px"}}    src={require("./Assets/cardImage.png")} />
                            <span style={{position:"absolute",top:"45%",left:"42%"}}>
                                    <img style={{width:"51px",height:"80px"}} src={require("./Assets/ActiveButton.png")}/>
                                    Login
                                    {/* <div style={{width:"51px",height:"80px", backgroundImage: `url(${ActiveButton})`}}>
                                        <p>
                                            Login
                                        </p>
                                    </div> */}
                            </span>
                        </div>
                    
                        <div className="black" style={{width:"300px",height:"500px", backgroundColor:"#000000",backgroundImage: `url(${backgroundImage})` }}>
                            <img src={require("./Assets/close.png")}/>

                            <div style={{ display:"flex", justifyContent:"center", alignItems:"center" ,flexDirection:"Column"}}>
                                <img  style={{width:"154px",height:"154px", top:"0"}} src={require("./Assets/Logo.png")} />
                                <h1 style={{ fontSize:"40px", fontWeight:"700", color:"white"}}color="white">
                                    {type}
                                </h1>
                                <div style={{width:"300px", height:"225px", border:"1px solid #FFFFFF", padding:"20px", borderRadius:"10px"}}>
                                    <form>
                                        <input placeholder="Email Address">
                                            
                                        </input>
                                        <input placeholder="Password">
                                            
                                        </input>
                                        {type==="login" &&
                                            <input placeholder="Password">
                                            
                                            </input>
                                        }
                                        
                                    </form>
                                </div>
                            </div>                            
                        </div>
                    </div>                    
                </ModalBody>
            </Modal>
        </>
        // <Modal
        //     isOpen={props.modalIsOpen}
        //     onRequestClose={props.onRequestClose}
        //     contentLabel="Example Modal"
        //     customStyles={customStyles}
        //     style={{ padding:"0px"}}
        // >
            // <div style={{display:"flex", flexDirection:"row"}}>
            //     <div style={{backgroundColor:"#FFB349",width:"300px", height:"500px"}} className="orange">
            //         <img style={{width:"300px",height:"500px"}}    src={require("./Assets/cardImage.png")} />
            //     </div>
            //     <div className="black" style={{backgroundColor:"#000000",width:"300px", height:"500px"}}>
            //             <img  style={{width:"300px",height:"500px"}}src={require("./Assets/background.png")} />
            //     </div>
            // </div>
        // </Modal>
    )
}