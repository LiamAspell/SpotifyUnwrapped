import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SpotifyPlayer from 'react-spotify-web-playback'
import { BiHeadphone } from "react-icons/bi";
import axios from 'axios';

function PlayerModal({artist, trackName, trackUri, token}) {
  const [show, setShow] = useState(false);
  

  // const lyricsFinder = require('lyrics-finder');
  // (async function(artist, title) {
  //     let lyrics = await lyricsFinder(artist, title) || "Not Found!";
  //     console.log(lyrics);
  // })(artist, trackName);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const displayLyrics = () => 
  {
    return (
      <div>
        {/* {lyricsFinder} */}
      </div>
    )
    }
  

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
        {displayLyrics()}
        <SpotifyPlayer
              token={token}
                uris={trackUri}
                styles={{
                  activeColor: '#1cb954',
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