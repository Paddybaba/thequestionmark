import React, { useState } from "react"
import Modal from 'react-bootstrap/Modal'
import { Button } from "react-bootstrap"
const QuestionModal = ({show, handleClose}) =>{


  
    return (
        <Modal show={show} onHide={handleClose}  size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}
export default QuestionModal