import { useState } from "react";
import Link from "next/link";
import Nav from "./header";
import Header from "./header";
import FooterBook from "./footer";
import Home from "./home";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
const PastBooking = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };
  return (
    <>
      <div className="main-div">
        <Header />
        <div className="pt-100 mb-5">
          <Container>
            <Row>
              <Col lg="12">
                <h4>
                  Past Bookings
                  <p style={{ marginTop: "10px" }}>Last 30 Days</p>
                </h4>
              </Col>
              <Col lg="12" className="mt-3">
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
              </Col>
            </Row>
          </Container>
        </div>
        <FooterBook />
      </div>
    </>
  );
};

export default PastBooking;
