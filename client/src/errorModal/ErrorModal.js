import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { useLocation, useNavigate } from "react-router-dom";

export function ErrorModal() {
    const [show, setShow] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const error = location.state.error;

    const handleClose = () => {
        setShow(false);
        navigate('/');
        setTimeout(() => {
            const contactSection = document.getElementById("my-div");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }, 100); // Delay for smoother scroll
    };


    return (
        <Modal backdrop="static" className="modal" show={show} onHide={handleClose} style={{textAlign: "center"}}>
            <div class="modal-content">
                <div class="modal-header">
                    {/* <h5 class="modal-title" id="exampleModalLabel" style={{margin: "auto"}}>אופס</h5> */}
                    <button onClick={handleClose} type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                   <h5>{error}</h5> 
                </div>
                <div class="modal-footer" style={{margn: "auto"}}>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={handleClose}>הבנתי</button>
                </div>
            </div>
        </Modal>
    );
}