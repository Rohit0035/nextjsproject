import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Header from "./header";
import FooterBook from "./footer";
const Membership = () => {
  return (
    <>
      <div className="main-div">
        <Header />
        <div className="pt-100 mb-5">
          <Container>
            <Row>
              <Col lg="12">
                  <Card>
                      <h4 style={{backgroundColor:'green', color:'#fff', marginBottom:'0px', padding:'12px'}}>Membership</h4>
                      <div className="p-4">
                          <p>You don't have any membership.</p>
                          <p className="me-2">Want to become a member?  <span><Button className="default-btn">Join Now..</Button></span> </p>
                      </div>
                  </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <FooterBook />
      </div>
    </>
  );
};

export default Membership;
