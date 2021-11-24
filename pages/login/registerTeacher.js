import React, { useState } from "react";
import Head from "next/head";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useRouter } from "next/router";
import { userLogin } from "../../redux/actions";
import { connect } from "react-redux";

const registerTeacher = (props) => {
  // console.log("props from register page :", props);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const router = useRouter();

  function validateForm() {
    return email.length > 0 && password.length > 0 && teacherName.length > 0;
  }

  async function handleSubmit() {
    try {
      const resposne = await axios.post(
        "http://localhost:8080/registerTeacher",
        {
          teacher_id: email,
          teacher_name: teacherName,
          password: password,
        }
      );
      const data = await resposne.data; // receive : Registered Succesfully

      if (resposne.status === 400 || !data) {
        window.alert("Something went wrong during registration !!!");
      } else {
        const teacher = {
          teacher_id: email,
          teacher_name: teacherName,
        };
        // props.userLoginHandler(student);       ********************
        // router.push("/test/selectTest");        *****************
      }
    } catch (err) {
      alert("fetch error");
      console.log(err.message);
    }
  }

  return (
    <div
      className="row gx-0"
      style={{ height: "100vh", backgroundColor: "honeydew" }}
    >
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
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
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
            onClick={() => console.log(teacherName)}
          >
            Register
          </Button>
        </Form>
        <p
          className="mt-4 simple-link "
          //   onClick={() => router.push("/login/loginPage")}  ********************
        >
          Already registered, go to Login
        </p>
      </div>
    </div>
  );
};
// const mdtp = (dispatch) => ({
//   teacherLoginHandler: (data) => dispatch(userLogin(data)),
// });
// const mstp = (state) => ({
//   student: state.studentReducer,
// });
export default registerTeacher;
