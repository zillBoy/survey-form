import React, { useState } from 'react'
import Modal from './Modal'


const App = () => {
    
    const [showModal, setShowModal] = useState(false)
    
    const handleModal = () => {
        setShowModal(true)
    }

    return (
        <div>
            <button onClick={handleModal}>Show modal</button>
            {showModal ? <Modal closeModal={setShowModal} /> : null}
        </div>
    )
}

export default App
