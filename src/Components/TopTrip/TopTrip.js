import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import './topTrip.css';
export default function TopTrip() {
  const [trip, setTrip] = useState();

  useEffect(() => {
    fetch("/Trip.JSON")
      .then((res) => res.json())
      .then((data) => setTrip(data));
  }, []);

  return (
    <Container className="my-5">
      <h2 className="my-3">Weekly top trip</h2>
      <Row>
        {trip?.map((data) => (
          <Col xs={6} md={4} lg={3} key={data.id}>
            <Card style={{ width: "16rem",border: 'none' }}>
              <Card.Img variant="top" src={data.img} />
              <Card.Body className="d-block">
                <Card.Title>{data?.title}</Card.Title>
                <Card.Text>
                  <small className="text-muted">
                    In Dhaka -String From $ {data.price}{" "}
                    <span className="font-italic">per night</span>
                  </small>
                </Card.Text>
                <div className="btn-wrapper">
                  <a className="top-trip-btn rounded-pill" href="/">
                    View Details
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
