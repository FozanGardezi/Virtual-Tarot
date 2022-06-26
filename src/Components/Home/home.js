import React from "react"
import { Access } from "../Login/login";

export const Home = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const handleClose = () => {
        setIsOpen(!modalIsOpen)
    }
    return (
      <>
        <div>
            <Access modalIsOpen={modalIsOpen} onRequestClose={handleClose} />
            <button onClick={() => setIsOpen(!modalIsOpen)}>
                Signin
            </button>
        </div>
      </>  
    );
}