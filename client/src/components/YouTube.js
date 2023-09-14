import React, { useState, Suspense, lazy } from "react";
import Loader from "./Loader";
const ReactPlayer = lazy(() => import("react-player"));

const YouTube = () => {
  const [videos, setVideoURL] = useState([
    { name: "https://www.youtube.com/embed/Pip7zh_qdA4&t=252s" },
    { name: "https://www.youtube.com/embed/5P7YuhN-ycw&t=254s" },
    { name: "https://www.youtube.com/embed/S6Gzz3_CZpg&t=79s" },
  ]);
  return (
    <section className="stats youtube">
      <div className="container">
        <h3 className="youtube-video text-center">OUR VIDEOS</h3>
        <p></p>
        <div className="grid-3 my-3 grid text-center">
          {videos.map((video) => (
            <Suspense fallback={<Loader />}>
              <div>
                <ReactPlayer
                  className="react-player"
                  key={video.name}
                  url={video.name}
                  controls={true}
                />
              </div>
            </Suspense>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTube;
