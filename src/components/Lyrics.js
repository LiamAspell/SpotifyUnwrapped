import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Lyrics({ artist, track }) {
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    async function fetchLyrics() {
      try {
        // Replace YOUR_API_KEY with your actual API key
        const apiKey = '23e8ec2bfab13bab17c8734e6a2ca881';
        const response = await axios.get(
        //  console.log(track, artist, apiKey)
          `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=shape%20of%20you&q_artist=ed%20sheeran&apikey=23e8ec2bfab13bab17c8734e6a2ca881`
        );
        setLyrics(response.data.message.body.lyrics.lyrics_body);
      } catch (error) {
        console.error(error);
      }
    }

    fetchLyrics();
  }, [artist, track]);

  return (
    <div>
      {lyrics ? <pre>{lyrics}</pre> : <p>Loading lyrics...</p>}
    </div>
  );
}

export default Lyrics;
