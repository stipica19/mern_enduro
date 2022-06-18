import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

import axios from "axios";
const VideoGallery = () => {
  const [videos, setVideoURL] = useState([]);

  const getVideos = async () => {
    try {
      const response = await axios.get("/api/index/getYouTube");

      //console.log(response.data);

      setVideoURL(response.data);
    } catch (error) {
      //console.log(error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <section className="docs-main youtube">
      <div className="container grid">
        {videos.map((item) => (
          <div className="item">
            <div className="item-inner">
              <ReactPlayer
                className="react-player"
                key={item._id}
                url={item.youtube_url}
                controls={true}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;
