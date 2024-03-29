import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ArtistModal({artistName, artistFollowers, artistPopularity, artistGenre}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" id={artistName} onClick={handleShow}>
        More Info
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{artistName}</Modal.Title> 
        </Modal.Header>
        <Modal.Body>
          <p>Artist Rating - {artistPopularity}</p>
          <p>Artist Followers - {artistFollowers}</p>
          <p>Genre - {artistGenre} </p> 
        </Modal.Body>
       
      </Modal>
    </>
  );
}


export default ArtistModal;