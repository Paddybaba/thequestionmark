import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { selectOptions, setQuestions } from "../../redux/actions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";
import { Hint } from "react-autocomplete-hint";
import axios from "axios";
import path from "../api/mypaths";
import { Alert } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
const selectTest = (props) => {
  // console.log("select page props", props);
  const [authorHint, setAuthorHint] = useState([]);
  const [mystudent, setStudent] = useState(props.student.user.student_name);
  const [subject, setSubject] = useState("Science");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState(2021);
  const [standard, setStandard] = useState("Class-1");
  const [show, setShow] = useState(false);
  const [showSpinner, setSpinner] = useState(false);
  useEffect(async () => {
    const response = await axios.post(`${path}/getauthors`);
    const authors = await response.data;
    // console.log("authors", authors);
    setAuthorHint(authors);
  }, []);
  function validateForm() {
    return (
      subject.length > 0 && author.length > 0 && year > 0 && standard.length > 0
    );
  }

  const router = useRouter();

  const onSubmit = async () => {
    setSpinner(true);
    const options = {
      subject,
      author,
      year,
      standard,
    };
    props.selectOptionsHandler(options);
    const questions = await requestQuestions(options);
    if (questions.length > 0) {
      props.setQuestionsHandler(questions);
      setSpinner(false);
      router.push("/test/start_test");
    } else {
      setShow(true);
      // alert("NO tests available");
    }
  };
  // console.log(props);
  return (
    <>
      <div className="container-fluid" style={{ color: "white" }}>
        <div className="my-alert">
          <Alert
            variant="danger"
            show={show}
            onClose={() => setShow(false)}
            dismissible
          >
            No tests available !!!
          </Alert>
        </div>
        {showSpinner ? (
          <div className="my-spinner">
            <Spinner animation="border" variant="info" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : null}
        <div className="row">
          <div className="col-10 mx-auto">
            <h3 className="col-10 text-center mx-auto mt-5">
              Welcome : {mystudent}
            </h3>
            <h3 className="text-center mt-4">Select your test paper</h3>

            <div className="row">
              <div className="col-sm-6 mx-auto my-box">
                <Form>
                  <Form.Group size="lg" controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => setSubject(e.target.value)}
                      defaultValue="Science"
                    >
                      <option value="Mathematics">Mathematics</option>
                      <option value="General Knowledge">
                        General Knowledge
                      </option>
                      <option value="Science">Science</option>
                      <option value="English">English</option>
                    </select>
                  </Form.Group>
                  <Form.Group className="mt-3">
                    <label>Select Author</label>
                    <input
                      className="form-select"
                      aria-label="Default select example"
                      list="author-options"
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                    <datalist id="author-options">
                      {authorHint.map((author, index) => {
                        return (
                          <option value={author} key={index}>
                            {author}
                          </option>
                        );
                      })}
                    </datalist>
                  </Form.Group>
                  <Form.Group className="mt-3" size="lg" controlId="class">
                    <Form.Label>Class</Form.Label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => setStandard(e.target.value)}
                    >
                      <option value="Class-1">Class-1</option>
                      <option value="Class-2">Class-2</option>
                      <option value="Class-3">Class-3</option>
                      <option value="Class-4">Class-4</option>
                      <option value="Class-5">Class-5</option>
                      <option value="Class-6">Class-6</option>
                      <option value="Class-7">Class-7</option>
                      <option value="Class-8">Class-8</option>
                      <option value="Class-9">Class-9</option>
                      <option value="Class-10">Class-10</option>
                      <option value="Class-11">Class-11</option>
                      <option value="Class-12">Class-12</option>
                    </select>
                  </Form.Group>
                  <Form.Group className="mt-3" size="lg" controlId="year">
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                      type="number"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-around">
                    <Button
                      block="true"
                      className="mt-4"
                      disabled={!validateForm()}
                      onClick={() => onSubmit()}
                    >
                      Submit
                    </Button>
                    <Button
                      block="true"
                      className="mt-4"
                      // type="submit" (This is not allowing action to work properly)
                      onClick={() => router.push("/login/loginStudent")}
                    >
                      Log Out
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const requestQuestions = async (options) => {
  const response = await axios.post(`${path}/getquest`, options);
  const data = await response.data;
  return data;
};

const mdtp = (dispatch) => ({
  selectOptionsHandler: (options) => dispatch(selectOptions(options)),
  setQuestionsHandler: (questions) => dispatch(setQuestions(questions)),
});
const mstp = (state) => ({
  student: state.studentReducer,
});
export default connect(mstp, mdtp)(selectTest);
