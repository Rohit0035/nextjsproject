import { useState } from "react";
import Link from "next/link";
import Nav from "./header";
import Header from "./header";
import FooterBook from "./footer";
import Home from "./home";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import Modal from "react-bootstrap/Modal";

const Overview = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="main-div">
        <Header />
        <div className="pt-100 mb-5">
          <Container>
            <Row>
              <Col lg="6">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton style={{ textAlign: "left" }}>
                        <span>Personal details</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="grid-1">
                        <ul>
                          <li>
                            Name: <span>User Name</span>
                          </li>
                          <li>
                            Gender: <span>Male</span>
                          </li>
                          <li>
                            Birthday: <span>27/07/2023</span>
                          </li>
                        </ul>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </Col>
              <Col lg="6">
                <Accordion allowZeroExpanded preExpanded={["b"]}>
                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton style={{ textAlign: "left" }}>
                        <span>Contact Details</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="grid-1">
                        <ul>
                          <li>
                            Address: <span></span>
                          </li>
                          <li>
                            Home/Work: <span>----</span>
                          </li>
                          <li>
                            Mobile: <span>0000000000</span>
                          </li>
                          <li>
                            Email: <span>info@gmail.com</span>
                          </li>
                        </ul>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </Col>
              <Col lg="6">
                <Accordion
                  allowZeroExpanded
                  preExpanded={["c"]}
                  className="mt-3"
                >
                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton style={{ textAlign: "left" }}>
                        <span>Login details</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="grid-1">
                        <ul>
                          <li>
                            Username: <span>User Name</span>
                          </li>
                          <li>
                            Status: <span>Approved</span>
                          </li>
                          <li>
                            Email: <span>info@gmail.com</span>
                          </li>
                        </ul>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </Col>

              <Col lg="12" className="mt-3 mb-5">
                <Card className="p-3">
                  <div className="d-flex">
                    <h6 className="mt-2">Sub-accounts</h6>
                    <Button
                      onClick={handleShow}
                      size="sm"
                      className="default-btn"
                      style={{ marginLeft: "auto", padding: "10px" }}
                    >
                      <i className="bx bx-plus"></i> New
                    </Button>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <FooterBook />
      </div>
      {/* modal Add  */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col lg="12" className="mb-2">
                <label>First Name</label>
                <input
                  text="text"
                  className="form-control"
                  placeholder="First Name"
                />
              </Col>
              <Col lg="12" className="mb-2">
                <label>Last Name</label>
                <input
                  text="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </Col>
              <Col md="12" className="mb-2">
                <label>Date of Birth</label>
                <input type="date" className="form-control" placeholder="DOB" />
              </Col>
              <Col md="12">
                <label>Gender</label>
                {["radio"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check // prettier-ignore
                      type={type}
                      id={`default-${type}`}
                      label={`Male`}
                    />

                    <Form.Check
                      type={type}
                      label={`Female`}
                      id={`default-${type}`}
                    />
                  </div>
                ))}
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Overview;
