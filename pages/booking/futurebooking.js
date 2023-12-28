import React, { useState } from "react";
import Link from "next/link";
import Nav from "./header";
import Header from "./header";
import FooterBook from "./footer";
import Home from "./home";
import { Container, Row, Col, Button } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import Collapse from "react-bootstrap/Collapse";
const FutureBooking = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="main-div">
        <Header />
        <div className="pt-100 mb-5">
          <Container>
            <Row>
              <Col lg="12">
                <h4>
                  My Bookings
                  <p style={{ marginTop: "10px" }}>Next 06 Months</p>
                  <span
                    style={{
                      float: "right",
                      marginTop: "-55px",
                      fontSize: "14px",
                    }}
                  >
                    <Button
                      onClick={() => setOpen(!open)}
                      aria-controls="example-collapse-text"
                      aria-expanded={open}
                      style={{ backgroundColor: "Green" }}
                    >
                      Search by date range
                    </Button>
                  </span>
                </h4>
                <Collapse in={open}>
                  <div id="example-collapse-text mt-5">
                    <Row>
                      <Col lg="5">
                        <label htmlFor="startDate" className="me-1">
                          Start Date:
                        </label>
                        <input
                          type="date"
                          id="startDate"
                          value={startDate}
                          onChange={handleStartDateChange}
                          className="me-2 form-control"
                        />
                      </Col>
                      <Col lg="5">
                        <label htmlFor="endDate">End Date:</label>
                        <input
                          type="date"
                          id="endDate"
                          value={endDate}
                          onChange={handleEndDateChange}
                          className="form-control"
                        />
                      </Col>
                      <Col lg="2">
                        <Button
                          className="defualt-btn"
                          style={{
                            backgroundColor: "Green",
                            marginTop: "30px",
                          }}
                        >
                          Search
                        </Button>
                      </Col>
                    </Row>
                  </div>
                </Collapse>
              </Col>
              <Col lg="12" className="mt-4">
                <div className="p-1">
                  <div className="doctor-vaccination-table table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>S.No.</th>
                          <th className="tb-color-2">Booking ID</th>
                          <th className="tb-color-3">User Name</th>
                          <th className="tb-color-4">User Mobile</th>
                          <th className="tb-color-5">User Email</th>
                          <th className="tb-color-6">User Address</th>
                          <th className="tb-color-6">Booking</th>
                          <th className="tb-color-7">Bookings Date</th>
                          <th className="tb-color-8">Amount</th>
                          <th className="tb-color-9">Action</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>
                            <span>1</span>
                          </td>
                          <td className="tb-color-2">
                            <span>1121212</span>
                          </td>
                          <td>
                            <span>John</span>
                          </td>
                          <td>
                            <span>334344434343</span>
                          </td>
                          <td>
                            <span>Info@gmail.com</span>
                          </td>

                          <td>
                            <span>Lorem Ipsum</span>
                          </td>
                          <td>
                            <span>5 Hours</span>
                          </td>
                          <td>
                            <span>25-12-23</span>
                          </td>
                          <td>
                            <span>$234</span>
                          </td>
                          <td>
                            <span>
                              <i className="bx bx-trash"></i>
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <span>1</span>
                          </td>
                          <td className="tb-color-2">
                            <span>1121212</span>
                          </td>
                          <td>
                            <span>John</span>
                          </td>
                          <td>
                            <span>334344434343</span>
                          </td>
                          <td>
                            <span>Info@gmail.com</span>
                          </td>

                          <td>
                            <span>Lorem Ipsum</span>
                          </td>
                          <td>
                            <span>5 Hours</span>
                          </td>
                          <td>
                            <span>25-12-23</span>
                          </td>
                          <td>
                            <span>$234</span>
                          </td>
                          <td>
                            <span>
                              <i className="bx bx-trash"></i>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>1</span>
                          </td>
                          <td className="tb-color-2">
                            <span>1121212</span>
                          </td>
                          <td>
                            <span>John</span>
                          </td>
                          <td>
                            <span>334344434343</span>
                          </td>
                          <td>
                            <span>Info@gmail.com</span>
                          </td>

                          <td>
                            <span>Lorem Ipsum</span>
                          </td>
                          <td>
                            <span>5 Hours</span>
                          </td>
                          <td>
                            <span>25-12-23</span>
                          </td>
                          <td>
                            <span>$234</span>
                          </td>
                          <td>
                            <span>
                              <i className="bx bx-trash"></i>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <FooterBook />
      </div>
    </>
  );
};

export default FutureBooking;
