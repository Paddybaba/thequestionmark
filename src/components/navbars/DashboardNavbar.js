import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { Nav, NavDropdown } from "react-bootstrap";
import router from "next/router";
import { FaHome } from "react-icons/fa";
const DashboardNavbar = (props) => {
  return (
    <>
      <Navbar justify="true" bg="transparent" variant="dark" expand="sm">
        <div>
          <Navbar.Brand href="#home">
            <h2 className="x-center">{props.heading}</h2>
          </Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: 20 }}>
          <Nav className="ms-auto">
            {/* <Link href="/dashboard/studentOptions">
              <a
                style={{
                  marginTop: "0.4em",
                  color: "white",
                  fontSize: "1em",
                  marginRight: 20,
                }}
              >
                Dashboard
              </a>
            </Link> */}
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
    </>
  );
};

export default DashboardNavbar;
