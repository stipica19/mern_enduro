import React, { useState } from "react";
import Modal from "../components/Modal";
import axios from "axios";

import useInfiniteScroll from "../components/customHooks/useInfiniteScroll";
import useFetch from "../components/customHooks/useFetch";

import { useSelector } from "react-redux";
const Gallery = () => {
  const { loadMoreRef, skip } = useInfiniteScroll();
  const { loading, photos, isEnd } = useFetch(skip);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const handleDelete = (photoId) => {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const deletePhoto = axios.delete(
      `/api/index/deletePhoto/${photoId}`,
      config
    );
    window.location.reload(false);
  };

  const displayPhoto = photos.map((photo, index) => {
    return (
      <>
        <div key={photo._id} className="delete-x">
          {userInfo && userInfo.isAdmin && (
            <button
              className="delete-btn"
              onClick={() => handleDelete(photo._id)}
            >
              X
            </button>
          )}
          <img
            src={`/api/${photo.image}`}
            alt={photo.image}
            onClick={() => handleClick(photo, index)}
          />
        </div>
      </>
    );
  });

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    //console.log(item.image);
    setClickedImg(item.image);
  };

  const handelRotationRight = () => {
    const totalLength = photos.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = photos[0].image;
      //console.log(newUrl);
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = photos.filter((item) => {
      return photos.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = photos.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = photos[totalLength - 1].image;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = photos.filter((item) => {
      return photos.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].image;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <section className="docs-main gallery">
      <div className="grid-1 container">
        <div className="card flex">
          <h1>GALLERY</h1>
        </div>
        <div className="card flex">
          <div className="grid-inner">
            <div className="ga">
              <div className="grid-container">{displayPhoto}</div>
            </div>
            <div ref={loadMoreRef}>
              {/* Umjesto prikaza Loader-a, dodajemo poruku ili ne prikazujemo ništa */}
              {loading && <p>Loading...</p>}
              {isEnd && <p></p>}
            </div>
            <div>
              {clickedImg && (
                <Modal
                  clickedImg={clickedImg}
                  handelRotationRight={handelRotationRight}
                  setClickedImg={setClickedImg}
                  handelRotationLeft={handelRotationLeft}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
