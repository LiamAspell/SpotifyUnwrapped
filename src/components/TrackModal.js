import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function TrackModal({artistName, releaseDate, albumName, artist}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
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
          <p>Album Name - {albumName}  </p>
          <p>Date of Release - {releaseDate}</p>
          <p>Artist - {artist} </p> 
        </Modal.Body>
      </Modal>
    </>
  );
}


export default TrackModal;