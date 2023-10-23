import {  useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { useLocation, useNavigate} from "react-router-dom";
import "../style/errorModal.css"

export function ErrorModal() {
    const [show, setShow] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const error = location.state.error;

    const handleClose = () => {
        setShow(false);
        navigate('/')
    };


    return (
        
            <Modal id="modal" show={show} onHide={handleClose} >
                <h4 className="text-modal">{error}</h4>
            </Modal>
        
    );
}