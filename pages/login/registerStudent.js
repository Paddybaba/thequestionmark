import React, { useState } from "react";
import Head from "next/head";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useRouter } from "next/router";
import { userLogin } from "../../redux/actions";
import { connect } from "react-redux";
import path from "../api/mypaths";
import { FaHome, FaKey, FaMailBulk, FaUserAlt } from "react-icons/fa";
import SRNavbar from "../../src/components/navbars/StudenRegisterNavbar";
const registerStudent = (props) => {
  // console.log("props from register page :", props);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [studentName, setStudentName] = useState("");
  const router = useRouter();

  function validateForm() {
    return email.length > 0 && password.length > 0 && studentName.length > 0;
  }

  async function handleSubmit() {
    try {
      const resposne = await axios.post(`${path}/registerStudent`, {
        student_id: email,
        student_name: studentName,
        password: password,
      });
      const data = await resposne.data; // receive : Registered Succesfully

      if (resposne.status === 400 || !data) {
        window.alert("Something went wrong during registration !!!");
      } else {
        const student = {
          student_id: email,
          student_name: studentName,
        };
        props.userLoginHandler(student);
        router.push("/test/selectTest");
      }
    } catch (err) {
      alert("fetch error");
      // console.log(err.message);
    }
  }

  return (
    <div className="row gx-0" style={{ color: "white" }}>
      <Head>
        <title>Registration</title>
      </Head>
      <SRNavbar />
      <div className="col-7 mt-5 mx-auto">
        {/* <div
          className="simple-link"
          style={{ position: "absolute", top: 5, right: 10, cursor: "pointer" }}
          onClick={() => router.push("/")}
        >
          <FaHome />
        </div> */}

        <div className="col-sm-10 mx-auto my-box">
          <Form>
            <Form.Group size="lg" controlId="studentName">
              <Form.Label>
                <FaUserAlt /> Name
              </Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mt-4" size="lg" controlId="email">
              <Form.Label>
                <FaMailBulk /> Email
              </Form.Label>
              <Form.Control
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
            <div className="d-flex justify-content-center">
              <Button
                block="true"
                className="mt-4"
                // type="submit" (This is not allowing action to work properly)
                disabled={!validateForm()}
                onClick={() => handleSubmit()}
              >
                Register
              </Button>
            </div>
          </Form>
          <p
            className="mt-4 simple-link "
            onClick={() => router.push("/login/loginStudent")}
          >
            Already registered, go to Login
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
export default connect(mstp, mdtp)(registerStudent);
