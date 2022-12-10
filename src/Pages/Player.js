import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback'
import Authenticate from '../components/Authenticate'
export const Player = (data) => {

return (
  
    <div className="App">
        <div className="App-header">
          <h1>Player</h1>  
          <Authenticate />
          <SpotifyPlayer />
        </div>
    </div>
  )
}

export default Player