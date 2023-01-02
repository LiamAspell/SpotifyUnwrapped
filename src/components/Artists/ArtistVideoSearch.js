import React, { useState, useEffect } from 'react';

const VideoSearch = ({ artist, track }) => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const searchVideo = async () => {
      const API_KEY = 'AIzaSyC4aOqIk6aRiOnHvhexhs-Mp8J18-r8-0U';
      const search = `Audio Visualizer`;
      const endpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&type=video&key=${API_KEY}`;
      const response = await fetch(endpoint);
      const data = await response.json();
      console.log(data.items[0])
      setVideo(data.items[0]);
    }

    searchVideo();
  }, [artist, track]);

  return (
    <div>
      {video && (
        <div>
          <iframe src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1&mute=1&fs=1`} width="500px" height={"500px"} />
        </div>
      )}
    </div>
  );
}

export default VideoSearch;