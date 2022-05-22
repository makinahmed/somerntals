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
          <h1 className="my-5 ">Browse By Property Type</h1>
          <Row className="g-4">
            <Slider {...settings}>
              {propertyTypeData?.map((data) => (
                <div className="single-card">
                  <Card>
                    <div style={{ height: "13rem" }}>
                      <Card.Img
                        style={{
                          maxHeight: "100%",
                          objectFit: "cover",
                          padding: "0",
                        }}
                        variant="top"
                        src={`${data.img}`}
                      />
                    </div>
                    <div className="property-type-cart-text">
                      <Card.Body className="d-block m-0 py-0">
                        <p
                          className="my-0"
                          style={{
                            color: "black",
                            fontWeight: "bold",
                            padding: "0",
                            margin: "0",
                          }}
                        >
                          {data.title}
                        </p>

                        <p className="my-0">
                          {data.quantity}
                          {data.title}
                        </p>
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
