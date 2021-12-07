import React, { useState } from "react";
import Head from "next/head";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useRouter } from "next/router";
import { userLogin } from "../../redux/actions";
import { connect } from "react-redux";
import path from "../api/mypaths";
import { FaHome, FaUserAlt, FaKey } from "react-icons/fa";

const loginPage = (props) => {
  // console.log("props from login page :", props);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit() {
    try {
      const resposne = await axios.post(`${path}/login`, {
        student_id: email,
        password: password,
      });
      const data = await resposne.data;
      const student = await data.student;
      // console.log("studnet", student);
      if (resposne.status === 400 || !data) {
        window.alert("Invalid Credentials 1 !!!");
      } else {
        props.userLoginHandler(student);
        router.replace("/test/selectTest");
      }
    } catch (err) {
      alert("Something went wrong !!!");
      console.log(err.message);
    }
  }

  return (
    <div
      className="row gx-0"
      style={{ color: "white"}}
    >
      <Head>
        <title>Student Login</title>
      </Head>
      <div className="col-7 mx-auto" style={{ marginTop: "3em" }}>
        <div
          className="simple-link"
          style={{
            fontSize: "1.3em",
            position: "absolute",
            top: 5,
            right: 10,
            cursor: "pointer",
          }}
          onClick={() => router.push("/")}
        >
          <FaHome />
        </div>
        <div className="text-center text-uppercase fs-3 fw-bold my-5">
          Student Login
        </div>
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
  );
};
const mdtp = (dispatch) => ({
  userLoginHandler: (data) => dispatch(userLogin(data)),
});
const mstp = (state) => ({
  student: state.studentReducer,
});
export default connect(mstp, mdtp)(loginPage);
