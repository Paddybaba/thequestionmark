import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { Nav, NavDropdown } from "react-bootstrap";
import router from "next/router";
import { FaHome } from "react-icons/fa";
const DashboardNavbar = (props) => {
  return (
    <>
      <Navbar justify bg="transparent" variant="dark" expand="sm">
        <Navbar.Brand href="#home">
          <h2 style={{ marginLeft: 10 }}>{props.heading}</h2>
        </Navbar.Brand>
        {/* <h2 style={{ paddingLeft: "35%", color: "white" }}>TEST LIBRARY</h2> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: 20 }}>
          <Nav className="ms-auto">
            <Link href="/dashboard/studentOptions">
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
              <a style={{ color: "white", fontSize: "1.4em", marginRight: 10 }}>
                <FaHome />
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
                router.replace("/login/loginStudent");
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
    </>
  );
};

export default DashboardNavbar;
