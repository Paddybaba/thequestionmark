import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { Nav } from "react-bootstrap";
import router from "next/router";
const QbankNB = (props) => {
  return (
    <>
      <Navbar justify="true" bg="transparent" variant="dark" expand="sm">
        <div>
          <p className="qbank-teacher">{props.heading}</p>
          <h2 className="x-center" style={{ color: "white" }}>
            Question Bank
          </h2>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: 20 }}>
          <Nav className="ms-auto">
            <a
              style={{
                marginTop: "0.4em",
                color: "white",
                fontSize: "1em",
                marginRight: 10,
              }}
              onClick={() => {
                router.replace("/dashboard/teacherOptions");
              }}
            >
              Dashboard
            </a>
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

export default QbankNB;

// import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Link from "next/link";
// import { Nav, NavDropdown } from "react-bootstrap";
// import router from "next/router";
// const QbankNB = (props) => {
//   return (
//     <>
//       <Navbar bg="transparent" variant="dark" expand="sm">
//         <h2 style={{ marginLeft: 10, color: "#C34A36l", fontWeight: "bold" , color:"white"}}>
//           My Question Bank
//         </h2>

//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav" style={{ marginLeft: 20 }}>
//           <Nav className="ms-auto">
//             <Link href="/dashboard/teacherOptions">
//               <a
//                 style={{
//                   marginTop: "0.3em",
//                   color: "white",
//                   fontSize: "1.2em",
//                   marginRight: 10,
//                 }}
//               >
//                 Dashboard
//               </a>
//             </Link>
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
//                 props.setQBankHandler(null)
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

// export default QbankNB;
