import React from "react";
import Link from "next/link";
import Nav from "./header";
import Header from "./header";
import FooterBook from "./footer";
import Home from "./home";
import { Container, Row, Col, Button, Card, Badge } from "react-bootstrap";

import UnpaidInvoice from "./unpaidinvoice";
import FullCalendar from "@rmcooper/next-fullcalendar";
import dayGridPlugin from "@rmcooper/next-fullcalendar/daygrid";
import timeGridPlugin from "@rmcooper/next-fullcalendar/timegrid";
import interactionPlugin from "@rmcooper/next-fullcalendar/interaction";
import BadmintonSchedule from "./BadmintonSchedule";
const Calendar = () => {
  return (
    <>
      <div className="main-div">
        <Header />
        <div className="pt-100 mb-5 mt-3">
          <Container>
            <Row>
              <Col lg="3">
                <input type="date" className="form-control mb-3" />
                <div
                  className="list"
                  style={{ border: "1px solid#ccc", padding: "15px" }}
                >
                  <div className="d-flex">
                    <Badge
                      className="me-2"
                      style={{
                        backgroundColor: "green",
                        padding: "4px 6px",
                        color: "#fff",
                        height: "30px",
                        fontSize: "12px",
                        paddingTop: "10px",
                      }}
                    >
                      3/01/24 Wednesday
                    </Badge>
                    <p> $9.00</p>
                    <i
                      className="bx bx-trash"
                      style={{
                        marginLeft: "auto",
                        color: "red",
                        fontSize: "25px",
                        cursor: "pointer",
                      }}
                    ></i>
                  </div>
                  <p>12:30pm - 1pm, Badminton 3</p>
                </div>
                <div
                  className="list"
                  style={{ border: "1px solid#ccc", padding: "15px" }}
                >
                  <div className="d-flex">
                    <Badge
                      className="me-2"
                      style={{
                        backgroundColor: "green",
                        padding: "4px 6px",
                        color: "#fff",
                        height: "30px",
                        fontSize: "12px",
                        paddingTop: "10px",
                      }}
                    >
                      3/01/24 Wednesday
                    </Badge>
                    <p> $9.00</p>
                    <i
                      className="bx bx-trash"
                      style={{
                        marginLeft: "auto",
                        color: "red",
                        fontSize: "25px",
                        cursor: "pointer",
                      }}
                    ></i>
                  </div>
                  <p>12:30pm - 1pm, Badminton 3</p>
                </div>
                <div
                  className="list"
                  style={{ border: "1px solid#ccc", padding: "15px" }}
                >
                  <div className="d-flex">
                    <Badge
                      className="me-2"
                      style={{
                        backgroundColor: "green",
                        padding: "4px 6px",
                        color: "#fff",
                        height: "30px",
                        fontSize: "12px",
                        paddingTop: "10px",
                      }}
                    >
                      3/01/24 Wednesday
                    </Badge>
                    <p> $9.00</p>
                    <i
                      className="bx bx-trash"
                      style={{
                        marginLeft: "auto",
                        color: "red",
                        fontSize: "25px",
                        cursor: "pointer",
                      }}
                    ></i>
                  </div>
                  <p>12:30pm - 1pm, Badminton 3</p>
                </div>
                <div
                  className="list"
                  style={{ border: "1px solid#ccc", padding: "15px" }}
                >
                  <div className="d-flex">
                    <Badge
                      className="me-2"
                      style={{
                        backgroundColor: "green",
                        padding: "4px 6px",
                        color: "#fff",
                        height: "30px",
                        fontSize: "12px",
                        paddingTop: "10px",
                      }}
                    >
                      3/01/24 Wednesday
                    </Badge>
                    <p> $9.00</p>
                    <i
                      className="bx bx-trash"
                      style={{
                        marginLeft: "auto",
                        color: "red",
                        fontSize: "25px",
                        cursor: "pointer",
                      }}
                    ></i>
                  </div>
                  <p>12:30pm - 1pm, Badminton 3</p>
                </div>
                <div className="text-center mt-4">
                     <p>Clear Cart and Start Again</p>
                    <Button className="default-btn">
                       <i className="bx bx-cart" style={{fontSize:'16px'}}/> Checkout<span> (04)</span>
                    </Button>
                </div>
              </Col>
              <Col lg="9">
                <h5 className="mb-2">Lorem Sports Centres</h5>
                <BadmintonSchedule/>
              </Col>
            </Row>
          </Container>
        </div>
        <FooterBook />
      </div>
    </>
  );
};

export default Calendar;
