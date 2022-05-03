import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { Nav } from "react-bootstrap";
import router from "next/router";

const TestPageNavbar = (props) => {
  return (
    <div style={{ boxShadow: "0px 0px 4px rgba(255,255,255, 0.3)" }}>
      <Navbar justify="true" bg="transparent" variant="dark" expand="sm">
        <h2 style={{ color: "white", marginLeft: 10 }}>{props.student}</h2>
        <h2 className="x-center" style={{ color: "white" }}>
          {props.subject}
        </h2>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: 20 }}>
          <Nav className="ms-auto">
            <Link href="/test/selectTest">
              <a
                style={{
                  marginTop: "0.4em",
                  color: "white",
                  fontSize: "1em",
                  marginRight: 20,
                }}
              >
                Select Test
              </a>
            </Link>
            <Link href="/">
              <a
                style={{
                  marginTop: "0.4em",
                  color: "white",
                  fontSize: "1em",
                  marginRight: 20,
                }}
              >
                Home
              </a>
            </Link>
            <a
              style={{
                marginTop: "0.4em",
                color: "white",
                fontSize: "1em",
                marginRight: 10,
              }}
              onClick={() => {
                router.replace("/");
                localStorage.removeItem("student");
              }}
            >
              Logout
            </a>
            {/* <Nav.Link href="/">
              <h5 style={{ color: "white" }}>Home</h5>
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default TestPageNavbar;
