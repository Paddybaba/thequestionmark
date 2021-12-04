import React, { useState } from "react";
import Head from "next/head";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useRouter } from "next/router";
import { userLogin } from "../../redux/actions";
import { connect } from "react-redux";
import path from "../api/mypaths";
const loginTeacher = (props) => {
  // console.log("props from login page :", props);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      const data = await resposne.data;
      const teacher = await data.teacher;
      localStorage.setItem("teacher", JSON.stringify(teacher));
      // console.log("data", teacher.teacher_name)
      if (resposne.status === 400 || !data) {
        window.alert("Invalid Credentials 1 !!!");
      } else {
        //LOGIN TEAHCER TO SELECT SUBJECT PAGE
        // props.userLoginHandler(student);
        router.push("/question/addQuestion2");
      }
    } catch (err) {
      alert("Something went wrong !!!");
      // console.log(err.message);
    }
  }

  return (
    <div
      className="row gx-0"
      style={{ height: "100vh", backgroundColor: "honeydew" }}
    >
      <Head>
        <title>Teacher Login</title>
      </Head>
      <div className="col-7 mt-5 mx-auto">
        <div
          className="simple-link"
          style={{ position: "absolute", top: 5, right: 10, cursor: "pointer" }}
          onClick={() => router.push("/")}
        >
          Home
        </div>
        <div className="text-center text-uppercase fs-3 fw-bold my-5">
          Teacher Login
        </div>
        <Form>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Teacher ID</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mt-4" size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
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
          onClick={() => router.push("/login/registerTeacher")}
        >
          New Teacher, Register
        </p>
      </div>
    </div>
  );
};

export default loginTeacher;
