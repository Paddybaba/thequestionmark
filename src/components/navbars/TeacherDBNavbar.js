import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { Nav } from "react-bootstrap";
import router from "next/router";
const TeacherDBNavbar = (props) => {
  return (
    <>
      <Navbar justify="true" bg="transparent" variant="dark" expand="sm">
        <div>
          <p className="qbank-teacher">{props.heading}</p>
          <h2
            className="x-center"
            style={{ color: "white", marginTop: "0.08em" }}
          >
            Dashboard
          </h2>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: 20 }}>
          <Nav className="ms-auto">
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
                localStorage.removeItem("teacher");
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

export default TeacherDBNavbar;

// import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Link from "next/link";
// import { Nav, NavDropdown } from "react-bootstrap";
// import router from "next/router";
// const DashboardNavbar = (props) => {
//   return (
//     <>
//       <Navbar justify bg="transparent" variant="dark" expand="sm">
//         <Navbar.Brand href="#home">
//           <h2 style={{ marginLeft: 10 }}>{props.heading}</h2>
//         </Navbar.Brand>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: 20 }}>
//           <Nav className="ms-auto">
//             <Link href="/">
//               <a
//                 style={{
//                   marginTop: "0.3em",
//                   color: "white",
//                   fontSize: "1.2em",
//                   marginRight: 10,
//                 }}
//               >
//                 Home
//               </a>
//             </Link>
//             <a
//               style={{
//                 marginTop: "0.3em",
//                 color: "white",
//                 fontSize: "1.2em",
//                 marginRight: 10,
//               }}
//               onClick={() => {
//                 router.replace("/");
//                 localStorage.removeItem("teacher");
//               }}
//             >
//               Logout
//             </a>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </>
//   );
// };

// export default DashboardNavbar;
