import React, { useState } from "react";
import ReactPlayer from "react-player";

const YouTube = () => {
  const [videos, setVideoURL] = useState([
    { name: "https://www.youtube.com/watch?v=Pip7zh_qdA4&t=252s" },
    { name: "https://www.youtube.com/watch?v=5P7YuhN-ycw&t=254s" },
    { name: "https://www.youtube.com/watch?v=S6Gzz3_CZpg&t=79s" },
  ]);
  return (
    <section className="stats youtube">
      <div className="container">
        <h3 className="youtube-video text-center">OUR VIDEOS</h3>
        <p></p>
        <div className="grid-3 my-3 grid text-center">
          <div>
            <ReactPlayer
              className="react-player"
              key={videos[0].name}
              url={videos[0].name}
              controls={true}
            />
          </div>
          <div>
            <ReactPlayer
              className="react-player"
              key={videos[1].name}
              url={videos[1].name}
              controls={true}
            />
          </div>
          <div>
            <ReactPlayer
              className="react-player"
              key={videos[2].name}
              url={videos[2].name}
              controls={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTube;
