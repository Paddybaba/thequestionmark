import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { FaHome, FaUserAlt, FaKey } from "react-icons/fa";
const SLNavbar = (props) => {
  return (
    <>
      <Navbar
        justify
        bg="transparent"
        variant="dark"
        expand="md"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Navbar.Brand href="#">
          <h3 className="x-center">Student Login</h3>
        </Navbar.Brand>
        <div style={{ marginRight: 0 }}>
          <Link href="/">
            <a style={{ color: "white", fontSize: "1.4em", marginRight: 10 }}>
              <FaHome />
            </a>
          </Link>
        </div>
      </Navbar>
    </>
  );
};

export default SLNavbar;
