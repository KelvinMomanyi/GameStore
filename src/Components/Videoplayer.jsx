import React, { useState } from 'react';

function VideoPlayer({ videoSource }) {
  const [isPlay, setPlay] = useState(false);

  return (
    <div>
      {isPlay ? <video src={videoSource} controls /> : null}
    </div>
  );
}

export default VideoPlayer;