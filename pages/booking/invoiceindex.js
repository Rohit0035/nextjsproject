import React from "react";
import Link from "next/link";
import Nav from "./header";
import Header from "./header";
import FooterBook from "./footer";
import Home from "./home";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import UnpaidInvoice from "./unpaidinvoice";
import InvoiceList from "./invoicelist";

const InvoiceIndex = () => {
  return (
    <>
      <div className="main-div">
        <Header />
        <div className="pt-100 mb-5">
          <Container>
            <Row>
              <Col lg="12">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton style={{ textAlign: "left" }}>
                        <span style={{fontSize:'18px',fontWeight:'bolder'}}> Invoices</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="p-1">
                            <InvoiceList/>
                        </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </Col>

            </Row>
          </Container>
        </div>
        <FooterBook />
      </div>
    </>
  );
};

export default InvoiceIndex;
