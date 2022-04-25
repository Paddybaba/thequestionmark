import React, { useState } from "react";
import Head from "next/head";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useRouter } from "next/router";
import { teacherLogin } from "../../redux/actions";
import { connect } from "react-redux";
import path from "../api/mypaths";
import { FaHome, FaKey, FaUserAlt } from "react-icons/fa";

const loginTeacher = (props) => {
  // console.log("props from login page :", props);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remMe, setRemember] = useState(false);

  const router = useRouter();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit() {
    try {
      const resposne = await axios.post(`${path}/loginTeacher`, {
        teacher_id: email,
        password: password,
      });
      const teacher = await resposne.data;
      console.log("teacher", teacher);
      // localStorage.setItem("teacher", JSON.stringify(teacher));
      if (resposne.status === 400 || !teacher) {
        window.alert("Invalid Credentials 1 !!!");
      } else {
        if (remMe) {
          localStorage.setItem("teacher", JSON.stringify(teacher));
        }
        props.teacherLoginHandler(teacher);
        router.push("/dashboard/teacherOptions");
      }
    } catch (err) {
      alert("Something went wrong !!!");
      console.log(err.message);
    }
  }

  return (
    <div className="row gx-0" style={{ color: "white" }}>
      <Head>
        <title>Teacher Login</title>
      </Head>
      <div className="col-7 mt-5 mx-auto">
        <div
          className="simple-link fs-3"
          style={{ position: "absolute", top: 5, right: 10, cursor: "pointer" }}
          onClick={() => router.push("/")}
        >
          <FaHome />
        </div>
        <div className="text-center text-uppercase fs-3 fw-bold my-5">
          Teacher Login
        </div>
        <div className="mx-auto col-sm-8 my-box">
          <Form>
            <Form.Group size="lg" controlId="email">
              <Form.Label>
                <FaUserAlt /> Teacher ID
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
              // block="true"
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
            onClick={() => router.push("/login/registerTeacher")}
          >
            New Teacher, Register
          </p>
        </div>
      </div>
    </div>
  );
};

const mdtp = (dispatch) => ({
  teacherLoginHandler: (data) => dispatch(teacherLogin(data)),
});
const mstp = (state) => ({
  teacher: state.studentReducer,
});

export default connect(mstp, mdtp)(loginTeacher);
