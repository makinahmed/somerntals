import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { BsPlay } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import "./VideoBanner.css";

const VideoBanner = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="video-banner-section">
      <div className="video-banner">
        <h2>Take a short look &amp; enjoy your holiday</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          commodi.
        </p>
        <button className="video-btn" onClick={handleShow}>
          <BsPlay className="play-icon" />
        </button>
      </div>
      {show && (
        <div className="video-modal">
          <Modal
            show={show}
            onHide={handleClose}
            centered
            fullscreen={true}
            contentClassName="video-modal"
          >
            <div className="close-btn">
              <IoCloseCircleOutline onClick={handleClose} />
            </div>
            <div className="d-flex align-items-center justify-content-center h-100">
              <div>
                <iframe
                  className="video-play-container"
                  src="https://www.youtube.com/embed/nqye02H_H6I"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </Modal>
        </div>
      )}
    </section>
  );
};

export default VideoBanner;
