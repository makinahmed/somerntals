import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick/lib/slider";
import './PropertyType.css';

export default function PropertyType() {
  const [propertyTypeData, setPropertyTypeData] = useState();

  useEffect(() => {
    fetch("/PropertyType.JSON")
      .then((res) => res.json())
      .then((data) => setPropertyTypeData(data));
  }, []);

 

  // cards slider
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    initialSlide: 0,
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
      <section className="property-types">
        <Container>
          <h1 className="my-5 text-center">Browse By Property Type</h1>
          <Row className="g-4">
            <Slider {...settings}>
              {propertyTypeData?.map((data) => (
                <div className="single-card">
                  <Card>
                    <div style={{ height: "10rem" }}>
                      <Card.Img
                        style={{ maxHeight: "100%", objectFit: "cover" }}
                        variant="top"
                        src={`${data.img}`}
                      />
                    </div>
                    <div className="property-type-cart-text">
                      <Card.Body>
                        <Card.Title>{data?.title}</Card.Title>
                        <Card.Text>
                          {" "}
                          <span className="ms-1">{data?.quantity}</span>{" "}
                          <span className="ms-2">
                            {data?.title.toLowerCase()}
                          </span>
                        </Card.Text>
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
