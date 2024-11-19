import React, { useState } from "react";

const YouTube = React.memo(() => {
  const videos = [
    "Pip7zh_qdA4",
    "5P7YuhN-ycw",
    "S6Gzz3_CZpg",
  ];
  return (
    <section className="stats youtube">
      <div className="container">
        <h3 className="youtube-video text-center">OUR VIDEOS</h3>
        <div className="grid-3 my-3 grid text-center">
          {videos.map((id) => (
            <iframe
              key={id}
              title="YouTube Video"
              width="300"
              height="220"
              src={`https://www.youtube.com/embed/${id}?si=${id}&amp;rel=0`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              allowtransparency="true"
            ></iframe>
          ))}
        </div>
      </div>
    </section>
  );
});

export default YouTube;
