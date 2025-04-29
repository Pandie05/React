import { useState } from 'react';
//import { Modal } from './modal';
import { ModalV2 } from './modalV2';



const Todo = () => {
    const [showModal, setShowModal] = useState(false);

    const onDismissModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <div className="card-content">
                <h2>Learn React</h2>
                <button onClick={() => { setShowModal(true) }} className="btn">Done</button>
            </div>
            {showModal &&  (
                <div id="first-child">
                    <div id="second-child">
                        <div id="third-child">
                            <div id="fourth-child" style={{ color: 'yellow', fontSize: '2em' }}>
                                <ModalV2 dismissModal={onDismissModal} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
        </>
    );
}

export default Todo;