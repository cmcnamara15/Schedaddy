import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

const RegisterForm = () => {

  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true)
  };

  const handleModalClose = () => {
    setShowModal(false)
  };


  return (
    <>
    <a onClick={handleModalOpen}>
      Register here
    </a>
    <Modal show={showModal} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>This is where I could go to register</p>
      </Modal.Body>
    </Modal>
    </>
  )
}

export default RegisterForm