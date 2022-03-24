import React, { useEffect, useState } from "react";
import Head from "next/head";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useRouter } from "next/router";
import { userLogin } from "../../redux/actions";
import { connect } from "react-redux";
import path from "../api/mypaths";
import { FaHome, FaUserAlt, FaKey } from "react-icons/fa";
import Spinner from "react-bootstrap/Spinner";
import SLNavbar from "../../src/components/navbars/StudentLoginNavbar";

const loginPage = (props) => {
  // console.log("props from login page :", props);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSpinner, setSpinner] = useState(false);
  const [remMe, setRemember] = useState(false);

  const router = useRouter();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit() {
    setSpinner(true);
    try {
      const resposne = await axios.post(`${path}/login`, {
        student_id: email,
        password: password,
      });
      // Receive student from backend
      const student = await resposne.data;

      console.log("student:", student);
      // If no student found
      if (resposne.status === 400 || !student) {
        window.alert("Invalid Credentials 1 !!!");
      } else {
        // save to localStorage if remember me is checked
        if (remMe) {
          console.log("I will save the student");
          localStorage.setItem("student", JSON.stringify(student));
        } else {
          console.log("I will not remember the student");
        }
        props.userLoginHandler(student);
        setSpinner(false);
        router.replace("/dashboard/studentOptions");
      }
    } catch (err) {
      setSpinner(false);
      alert("Something went wrong !!!");
      console.log(err.message);
    }
  }
  const style = {
    play: {
      button: {
        width: "28",
        height: "28",
        cursor: "pointer",
        pointerEvents: "none",
        outline: "none",
        backgroundColor: "yellow",
        border: "solid 1px rgba(255,255,255,1)",
        borderRadius: 6,
      },
    },
  };

  return (
    <div className="row gx-0" style={{ color: "white" }}>
      <SLNavbar />

      <div className="col-7 mx-auto" style={{ marginTop: "3em" }}>
        {showSpinner ? (
          <div className="my-spinner">
            <Spinner animation="border" variant="info" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : null}
        {/* <div className="text-center text-uppercase fs-3 fw-bold my-5">
          Student Login
        </div> */}
        <div className="mx-auto col-sm-6 my-box">
          <Form>
            <Form.Group size="lg" controlId="email">
              <Form.Label>
                <FaUserAlt /> Student ID
              </Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mt-4" size="lg" controlId="password">
              <Form.Label>
                <FaKey /> Password
              </Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mt-2 smallLabel">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={remMe}
                onChange={() => {
                  setRemember(!remMe);
                }}
              />
              <label className="ml-1" htmlFor="remember">
                Remember me
              </label>
            </Form.Group>
            <Button
              block="true"
              className="mt-4"
              // type="submit" (This is not allowing action to work properly)
              disabled={!validateForm()}
              onClick={() => handleSubmit()}
            >
              Login
            </Button>
          </Form>

          <p
            className="mt-4 simple-link "
            onClick={() => router.push("/login/registerStudent")}
          >
            New Student, Register
          </p>
        </div>
      </div>
    </div>
  );
};
const mdtp = (dispatch) => ({
  userLoginHandler: (data) => dispatch(userLogin(data)),
});
const mstp = (state) => ({
  student: state.studentReducer,
});
export default connect(mstp, mdtp)(loginPage);
