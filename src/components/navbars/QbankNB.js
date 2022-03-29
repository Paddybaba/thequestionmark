import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { Nav, NavDropdown } from "react-bootstrap";
import router from "next/router";
const QbankNB = (props) => {
  return (
    <>
      <Navbar bg="transparent" variant="dark" expand="sm">
        <h2 style={{ marginLeft: 10, color: "coral" }}>
       My Question Bank
        </h2>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: 20 }}>
          <Nav className="ms-auto">
            <Link href="/dashboard/teacherOptions">
              <a
                style={{
                  marginTop: "0.3em",
                  color: "white",
                  fontSize: "1.2em",
                  marginRight: 10,
                }}
              >
                Dashboard
              </a>
            </Link>
            <Link href="/">
              <a
                style={{
                  marginTop: "0.3em",
                  color: "white",
                  fontSize: "1.2em",
                  marginRight: 10,
                }}
              >
                Home
              </a>
            </Link>
            <a
              style={{
                marginTop: "0.3em",
                color: "white",
                fontSize: "1.2em",
                marginRight: 10,
              }}
              onClick={() => {
                router.replace("/");
                localStorage.removeItem("teacher");
              }}
            >
              Logout
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default QbankNB;
