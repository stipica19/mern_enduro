import React, { useState, Suspense, lazy } from "react";
import Loader from "./Loader";
import LazyLoad from "react-lazyload";
const ReactPlayer = lazy(() => import("react-player"));

const YouTube = () => {
  const [videos, setVideoURL] = useState([
    { url: "https://www.youtube.com/embed/Pip7zh_qdA4?si=6GX24hn68QF2T_wb" },
    { url: "https://www.youtube.com/embed/5P7YuhN-ycw?si=6o1J2rlZrzbqrQsP" },
    { url: "https://www.youtube.com/embed/S6Gzz3_CZpg?si=4OANmDp8o-efUGQK" },
  ]);
  return (
    <section className="stats youtube">
      <div className="container">
        <h3 className="youtube-video text-center">OUR VIDEOS</h3>
        <p></p>
        <div className="grid-3 my-3 grid text-center">
          {videos.map((video) => (
            <LazyLoad height={200} offset={100} className="yt-video md-1 flex">
              <iframe
                title="YouTube Video"
                width="300"
                height="220"
                src={video.url}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </LazyLoad>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTube;
