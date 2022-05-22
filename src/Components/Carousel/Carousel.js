import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import './Carousel.css';
import { AiFillStar } from "react-icons/ai";

export default function Carousel() {

    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  return (
    <Container>
      <Slider {...settings}>
        <div className="container">
          <div className="carousel-img-wrapper">
            <img
              className="carousel-img"
              src="https://i.ibb.co/8DvGWjQ/image-16.jpg"
              alt=""
            />
            <div className="quote">
              <img
                src="https://i.ibb.co/0h1k59r/icons8-quote-left-50.png"
                alt=""
              />
            </div>
            <div className="carousel-text">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit mollitia provident est velit ab ratione aspernatur
                beatae incidunt pariatur? Temporibus esse laboriosam distinctio.
                Vero hic amet veniam! Similique, adipisci tempora! Suscipit non
                laudantium reprehenderit! Impedit atque officia harum possimus
                a. Error beatae tempora nemo aperiam officiis, autem nisi minus
              </p>
            </div>
            <div className="icons">
              <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
              <AiFillStar />
            </div>
            <h3 className="sayara">-Sayara Ahmed</h3>
          </div>
        </div>
        <div className="container">
          <div className="carousel-img-wrapper">
            <img
              className="carousel-img"
              src="https://i.ibb.co/DCZZQZ5/image-14.jpg"
              alt=""
            />
            <div className="quote">
              <img
                src="https://i.ibb.co/0h1k59r/icons8-quote-left-50.png"
                alt=""
              />
            </div>
            <div className="carousel-text">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit mollitia provident est velit ab ratione aspernatur
                beatae incidunt pariatur? Temporibus esse laboriosam distinctio.
                Vero hic amet veniam! Similique, adipisci tempora! Suscipit non
                laudantium reprehenderit! Impedit atque officia harum possimus
                a. Error beatae tempora nemo aperiam officiis, autem nisi minus
              </p>
            </div>
            <div className="icons">
              <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
              <AiFillStar />
            </div>
            <h3 className="sayara">-Sayara Ahmed</h3>
          </div>
        </div>
        <div className="container">
          <div className="carousel-img-wrapper">
            <img
              className="carousel-img"
              src="https://i.ibb.co/2g871ct/image-15.jpg"
              alt=""
            />
            <div className="quote">
              <img
                src="https://i.ibb.co/0h1k59r/icons8-quote-left-50.png"
                alt=""
              />
            </div>
            <div className="carousel-text">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Suscipit mollitia provident est velit ab ratione aspernatur
                beatae incidunt pariatur? Temporibus esse laboriosam distinctio.
                Vero hic amet veniam! Similique, adipisci tempora! Suscipit non
                laudantium reprehenderit! Impedit atque officia harum possimus
                a. Error beatae tempora nemo aperiam officiis, autem nisi minus
              </p>
            </div>
            <div className="icons">
              <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
              <AiFillStar />
            </div>
            <h3 className="sayara">-Sayara Ahmed</h3>
          </div>
        </div>
      </Slider>
    </Container>
  );
}