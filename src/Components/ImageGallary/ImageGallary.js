import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { CgArrowLongRight } from "react-icons/cg";
import './ImageGallary.css';
import Slider from "react-slick/lib/slider";
import "./ExploreHotels.css";


export default function ImageGallary() {
   const [exploreData, setExploreData] = useState();

   useEffect(() => {
     fetch("/ExploreHotels.JSON")
       .then((res) => res.json())
       .then((data) => setExploreData(data));
   }, []);

   // arrow
   function SampleNextArrow(props) {
     const { className, style, onClick } = props;
     return (
       <div
         className={className}
         style={{ ...style, display: "block" }}
         onClick={onClick}
       />
     );
   }

   function SamplePrevArrow(props) {
     const { className, style, onClick } = props;
     return (
       <div
         className={className}
         style={{ ...style, display: "block" }}
         onClick={onClick}
       />
     );
   }

   // cards slider
   const settings = {
     infinite: true,
     slidesToShow: 4,
     slidesToScroll: 1,
     speed: 1000,
     initialSlide: 0,
     nextArrow: <SampleNextArrow />,
     prevArrow: <SamplePrevArrow />,
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true,
         },
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2,
           initialSlide: 2,
         },
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
         },
       },
     ],
   };

  return (
    <section className="img-gallary">
      <Container className="gy-5">
        <section className="explore-hotel my-5">
          <Container>
            <h1 className="my-5 text-left">Explore Somalia and More</h1>
            <Row className="">
              <Slider {...settings}>
                {exploreData?.map((data) => (
                  <div className="single-card">
                    <Card>
                      <div style={{ height: "15rem" }}>
                        <Card.Img
                          style={{ maxHeight: "100%", objectFit: "cover" }}
                          variant="top"
                          src={`${data.img}`}
                        />
                      </div>
                      <div className="exp-hotel-cart-text">
                        <div className="card-body">
                          <div>
                            <h5>{data.title}</h5>
                            <p>Avarage Price</p>
                          </div>
                          <div className="mt-4"> ${data.price}</div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </Slider>
            </Row>
          </Container>
        </section>
        <Row>
          <Col xs={12} md={6} className="single-img my-3">
            <div className="img-wrapper">
              <div className="gallary-img-text">
                <h2>DUBAI</h2>
                <div className="explore">
                  <div>
                    <CgArrowLongRight />
                  </div>
                  <div className="ms-2">
                    <a href="/">Explore</a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="my-3">
            <div className="img-wrapper">
              <div className="gallary-img-text">
                <h2>TURKEY</h2>
                <div className="explore">
                  <div>
                    <CgArrowLongRight />
                  </div>
                  <div className="ms-2">
                    <a href="/">Explore</a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="my-5">
          <Col xs={12} md={4} className="single-img my-3">
            <div className="img-wrapper">
              <div className="gallary-img-text">
                <h2>LANDON</h2>
                <div className="explore">
                  <div>
                    <CgArrowLongRight />
                  </div>
                  <div className="ms-2">
                    <a href="/">Explore</a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="my-3">
            <div className="img-wrapper">
              <div className="gallary-img-text">
                <h2>USA</h2>
                <div className="explore">
                  <div>
                    <CgArrowLongRight />
                  </div>
                  <div className="ms-2">
                    <a href="/">Explore</a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4} className="my-3">
            <div className="img-wrapper">
              <div className="gallary-img-text">
                <h2>BANGKOK</h2>
                <div className="explore">
                  <div>
                    <CgArrowLongRight />
                  </div>
                  <div className="ms-2">
                    <a href="/">Explore</a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
// background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,44,113,1) 35%, rgba(0,212,255,1) 100%);
// #002c7185
