import React, { useEffect, useState, Suspense, lazy } from "react";
import axios from "axios";
import Loader from "./Loader";
const ReactPlayer = lazy(() => import("react-player"));

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
          <Suspense fallback={<Loader />}>
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
          </Suspense>
        ))}
      </div>
    </section>
  );
};

export default VideoGallery;
