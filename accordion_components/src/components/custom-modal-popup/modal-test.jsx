import Modal from "./modal";
import {useState} from 'react';
import './modal.css';





export default function ModalTest(){

    const [showModalPopup, setShowModalPopup] = useState(false);


    function handleToggleModalPopup(){
        setShowModalPopup(!showModalPopup);
    
    }

    function onClose(){
        setShowModalPopup(false);
    
    }


    return (
        <div>
            <button onClick={handleToggleModalPopup}>Open Modal</button>
            {
                showModalPopup && <Modal onClose={onClose}
                id = {'custom-id'}
                header={<h1>Customized Header</h1>}
                body={<p>This is the customized body</p>}
                footer={<h3>Customized Footer</h3>}
                
                
                />
            }
            
        </div>
    )

}