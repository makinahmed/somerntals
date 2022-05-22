import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick/lib/slider";
import './ExploreHotels.css';

export default function ExploreHotels() {
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
      style={{ ...style, display: "block"}}
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
    <>
      <section className="explore-hotel">
        <Container>
          <h1 className="my-5 text-center">Browse By Popular Hotels</h1>
          <Row className="g-4">
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
                      <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>{data.price}</Card.Text>
                      </Card.Body>
                    </div>
                  </Card>
                </div>
              ))}
            </Slider>
          </Row>
        </Container>
      </section>
    </>
  );
}
