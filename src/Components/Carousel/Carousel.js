import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from "react-slick";
import './Carousel.css';
import { AiFillStar } from "react-icons/ai";
import { FaQuoteLeft } from "react-icons/fa";

export default function Carousel() {
// arrow icon 




    const settings = {
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
     
    };
  return (
    <section className="my-5 carousel-section">
      <Container>
        <div className='w-50 mx-auto'>
          <h2 className='my-5 fw-bold'>Our Happy travelers</h2>
          <p className='mb-5 fs-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, incidunt quisquam accusamus cupiditate neque aut dolor
            minus repellendus obcaecati consequuntur.
          </p>
        </div>
        <Slider {...settings}>
          <div className="container">
            <div className="carousel-img-wrapper">
              <img
                className="carousel-img"
                src="https://i.ibb.co/8DvGWjQ/image-16.jpg"
                alt=""
              />
              <div className="quote">
                <FaQuoteLeft className="quote-icon" />
              </div>
              <div className="carousel-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit mollitia provident est velit ab ratione aspernatur
                  beatae incidunt pariatur? Temporibus esse laboriosam
                  distinctio. Vero hic amet veniam! Similique, adipisci tempora!
                  Suscipit non laudantium reprehenderit! Impedit atque officia
                  harum possimus a. Error beatae tempora nemo aperiam officiis,
                  autem nisi minus
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
                <FaQuoteLeft className="quote-icon" />
              </div>
              <div className="carousel-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit mollitia provident est velit ab ratione aspernatur
                  beatae incidunt pariatur? Temporibus esse laboriosam
                  distinctio. Vero hic amet veniam! Similique, adipisci tempora!
                  Suscipit non laudantium reprehenderit! Impedit atque officia
                  harum possimus a. Error beatae tempora nemo aperiam officiis,
                  autem nisi minus
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
                <FaQuoteLeft className="quote-icon" />
              </div>
              <div className="carousel-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit mollitia provident est velit ab ratione aspernatur
                  beatae incidunt pariatur? Temporibus esse laboriosam
                  distinctio. Vero hic amet veniam! Similique, adipisci tempora!
                  Suscipit non laudantium reprehenderit! Impedit atque officia
                  harum possimus a. Error beatae tempora nemo aperiam officiis,
                  autem nisi minus
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
    </section>
  );
}
