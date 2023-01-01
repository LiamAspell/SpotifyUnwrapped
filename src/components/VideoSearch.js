import React, { useState, useEffect } from 'react';

const VideoSearch = ({ artist, track }) => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const searchVideo = async () => {
      const API_KEY = 'AIzaSyC4aOqIk6aRiOnHvhexhs-Mp8J18-r8-0U';
      const search = `${artist} ${track}`;
      const endpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&type=video&key=${API_KEY}`;
      const response = await fetch(endpoint);
      const data = await response.json();
      
      setVideo(data.items[0]);
    }

    searchVideo();
  }, [artist, track]);

  return (
    <div>
      {video && (
        <div>
          <h2>{video.snippet.title}</h2>
          <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} />
        </div>
      )}
    </div>
  );
}

export default VideoSearch;