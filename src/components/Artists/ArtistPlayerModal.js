import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SpotifyPlayer from 'react-spotify-web-playback'
import { BiHeadphone } from "react-icons/bi";
import axios from 'axios';
import Video from './ArtistVideoSearch';

function PlayerModal({artist, trackName, trackUri, token}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
      Listen on Player  <BiHeadphone />
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{artist}</Modal.Title> 
        </Modal.Header>
        <Modal.Body>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <Video artist={artist} track={trackName}/>
          </div>
        
        <SpotifyPlayer
              token={token}
                uris={trackUri}
                styles={{
                  activeColor: '#1cb954',
                  autoPlay: 'True',
                  altColor: '#ccc',
                  bgColor: '#fff',
                  color: '#333',
                  errorColor: '#a60000',
                  height: 48,
                  loaderColor: '#ccc',
                  loaderSize: 32,
                  sliderColor: '#666',
                  sliderHandleBorderRadius: '50%',
                  sliderHandleColor: '#000',
                  sliderHeight: 8,
                  play:'True',
                  sliderTrackBorderRadius: 0,
                  sliderTrackColor: '#ccc',
                  trackArtistColor: '#666',
                  trackNameColor: '#333',
                  
               
                }}
                
              />
        </Modal.Body>
      </Modal>
    </>
  );
}


export default PlayerModal;