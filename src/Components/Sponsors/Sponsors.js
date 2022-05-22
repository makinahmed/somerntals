import React, { useEffect, useState } from "react";
// import { Container, Row } from "react-bootstrap";
import Slider from "react-slick/lib/slider";
import './Sponsors.css';

export default function Sponsors() {
  const [sponsors, setSponsors] = useState();

  useEffect(() => {
    fetch("/Soponsors.JSON")
      .then((res) => res.json())
      .then((data) => setSponsors(data));
  }, []);

  // cards slider
  const settings = {
    dots: true,
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
      <section className="property-types my-5">
        <Slider {...settings}>
          {sponsors?.map((sponsor) => (
            <div key={sponsor?.id} className="sponsors-img">
              <img src={sponsor?.img} alt="" />
            </div>
          ))}
        </Slider>
      </section>
    </>
  );
}
