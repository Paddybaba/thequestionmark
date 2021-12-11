import React, { useState } from "react";
import Head from "next/head";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useRouter } from "next/router";
import { userLogin } from "../../redux/actions";
import { connect } from "react-redux";
import path from "../api/mypaths";
const registerTeacher = (props) => {
  // console.log("props from register page :", props);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [school, setSchool] = useState("");
  const [city, setCity] = useState("");
  const router = useRouter();

  function validateForm() {
    return (
      email.length > 0 &&
      password.length > 0 &&
      teacherName.length > 0 &&
      school.length > 0 &&
      city.length > 0
    );
  }

  async function handleSubmit() {
    try {
      const resposne = await axios.post(`${path}/registerTeacher2`, {
        teacher_id: email,
        teacher_name: teacherName,
        password: password,
        school: school,
        city: city,
      });
      const data = await resposne.data; // receive : Registered Succesfully activation link sent

      if (resposne.status === 400 || !data) {
        window.alert("Something went wrong during registration !!!");
      } else {
        const teacher = {
          teacher_id: email,
          teacher_name: teacherName,
        };
        alert(
          `${teacher.teacher_name} registered successfully !!! Please check your mail for activation link ...`
        );
        localStorage.setItem("teacher", JSON.stringify(teacher));
        // props.userLoginHandler(student);       ********************
        router.replace("/login/loginTeacher");
      }
    } catch (err) {
      alert("Error Registering teacher");
      console.log(err.message);
    }
  }

  return (
    <div className="row gx-0" style={{ color: "white" }}>
      <Head>
        <title>Registration</title>
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
          New Teacher Registration
        </div>
        <Form>
          <Form.Group size="lg" controlId="teacherName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mt-4" size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
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
          <Form.Group className="mt-4" size="lg" controlId="school">
            <Form.Label>School</Form.Label>
            <Form.Control
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mt-4" size="lg" controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>
          <Button
            block="true"
            className="mt-4"
            // type="submit" (This is not allowing action to work properly)
            disabled={!validateForm()}
            onClick={() => handleSubmit()}
          >
            Register
          </Button>
        </Form>
        <p
          className="mt-4 simple-link "
          onClick={() => router.push("/login/loginTeacher")}
        >
          Already registered, go to Login
        </p>
      </div>
    </div>
  );
};

export default registerTeacher;
