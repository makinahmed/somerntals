import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { MdOutlineLocationOn, MdOutlineChildCare } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsCalendar2Check } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Banner.css";

const Banner = () => {
  const [location, setLocation] = useState("Select One");
  const [isClick, setIsClick] = useState(false);
  const [value, onChange] = useState(new Date());
  const [calenderOn, setCalenderOn] = useState(false);

  return (
    <section className="banner-container mb-5" on>
      <div className="banner-content">
        <div className="banner-top">
          <h1>Explore the best hotels of the whole world.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            perspiciatis fugit eveniet accusamus quos vel, quo amet ipsum
            mollitia nobis.
          </p>
        </div>
        <div className="banner-bottom">
          <Row>
            <Col md={3}>
              <p className="banner-bottom-title">Location</p>
              <div
                className="location-select"
                onClick={() => setIsClick(!isClick)}
              >
                <span>
                  <MdOutlineLocationOn className="location-icon" />
                  {location}
                </span>
                <IoMdArrowDropdown className="arrow-icon" />
                {isClick && (
                  <div className="location-option">
                    <div className="select-location-search">
                      <input />
                    </div>
                    <div className="option-container">
                      <p onClick={() => setLocation("Select One")}>
                        Select One
                      </p>
                      <p onClick={() => setLocation("Dhaka")}>Dhaka</p>
                      <p onClick={() => setLocation("New York City")}>
                        New York City
                      </p>
                      <p onClick={() => setLocation("Bandarban")}>Bandarban</p>
                      <p onClick={() => setLocation("Cox's Bazar")}>
                        Cox's Bazar
                      </p>
                      <p onClick={() => setLocation("London")}>London</p>
                      <p onClick={() => setLocation("Canada")}>Canada</p>
                    </div>
                  </div>
                )}
              </div>
            </Col>
            <Col md={3}>
              <p className="banner-bottom-title">Checkin - Checkout</p>
              <div className="calender">
                <BsCalendar2Check className="calender-icon" />
                <input
                  placeholder="Checkin & Checkout"
                  onClick={() => setCalenderOn(!calenderOn)}
                />
                <div>
                  {calenderOn && (
                    <Calendar
                      className="calender-container active"
                      onChange={onChange}
                      value={value}
                      next2Label={null}
                      prev2Label={null}
                      allowPartialRange={true}
                    />
                  )}
                </div>
              </div>
            </Col>
            <Col md={2}>
              <p className="banner-bottom-title">Adult</p>
              <div className="adult">
                <AiOutlineUser className="user-icon" />
                <input type="number" defaultValue={1} />
              </div>
            </Col>
            <Col md={2}>
              <p className="banner-bottom-title">Child</p>
              <div className="adult">
                <MdOutlineChildCare className="child-icon" />
                <input type="number" defaultValue={0} />
              </div>
            </Col>
            <Col md={2}>
              <div className="banner-search-btn-container">
                <button className="banner-search-btn">Search</button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Banner;
