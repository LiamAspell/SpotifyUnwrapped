import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CurrentlyPlaying() {
  // Declare state variables to store the currently playing track and any error messages
  const [track, setTrack] = useState(null);
  const [error, setError] = useState(null);
  
  // Use the useEffect hook to make the API call when the component mounts
  useEffect(() => {
    // Make the API call using axios
    axios.get('https://api.spotify.com/v1/me/player/currently-playing')
   
      .then(response => {
        // If the API call is successful, set the track state to the currently playing track
        setTrack(response.data);
        
      })
      .catch(error => {
        // If there is an error, set the error state to the error message
        setError(error.message);
      });
  }, []); // Pass an empty array as the second argument to useEffect to ensure it only runs once

  // Render the component
  return (
    <div>
      {error && <p>Error: {error}</p>}
      {track && <p>Currently playing: {track.name}</p>}
    </div>
  );
}

export default CurrentlyPlaying;