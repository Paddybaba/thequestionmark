import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { selectOptions, setQuestions } from "../../redux/actions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";
import { Hint } from "react-autocomplete-hint";
import axios from "axios";
import path from "../api/mypaths";
const selectTest = (props) => {
  console.log("select page props", props);
  const [authorHint, setAuthorHint] = useState([]);
  const [mystudent, setStudent] = useState(props.student.user.student_name);
  const [subject, setSubject] = useState("Science");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  useEffect(async () => {
    const response = await axios.post(`${path}/getauthors`);
    const authors = await response.data;
    console.log("authors", authors);
    setAuthorHint(authors);
  }, []);
  function validateForm() {
    return subject.length > 0 && author.length > 0 && year > 0;
  }

  const router = useRouter();

  const onSubmit = async () => {
    const options = {
      subject,
      author,
      year,
    };
    props.selectOptionsHandler(options);
    const questions = await requestQuestions(options);
    if (questions.length > 0) {
      props.setQuestionsHandler(questions);
      router.push("/test/start_test");
    } else {
      alert("NO tests available");
    }
  };
  // console.log(props);
  return (
    <>
      <div
        className="container-fluid"
        // style={{ backgroundColor: "honeydew" }}
      >
        <div className="row">
          <div className="col-10 mx-auto">
            <h3 className="col-10 text-center mx-auto mt-5">
              Welcome : {mystudent}
            </h3>
            <h3 className="text-center mt-4">Select your test paper</h3>

            <div className="row">
              <div className="col-10 mx-auto">
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
                  {/* <Form.Group size="lg" controlId="author">
                    <Form.Label>Select Author</Form.Label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      onChange={(e) => setAuthor(e.target.value)}
                    >
                      {authorHint.map((author, index) => {
                        return (
                          <option value={author} key={index}>
                            {author}
                          </option>
                        );
                      })}
                      </select>
                  </Form.Group> */}
                  {/* <Form.Group className="mt-4" size="lg" controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Form.Control
                      type="text"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                    />
                  </Form.Group> */}

                  {/* <Form.Group className="mt-4" size="lg" controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Hint options={authorHint} allowTabFill>
                      <input
                        className="form-control"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                      />
                    </Hint>
                  </Form.Group> */}
                  <Form.Group className="mt-3" size="lg" controlId="year">
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                      type="text"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    block="true"
                    className="mt-4"
                    // disabled={!validateForm()}
                    onClick={() => onSubmit()}
                  >
                    Submit
                  </Button>
                </Form>
                <Button
                  block="true"
                  className="mt-4"
                  // type="submit" (This is not allowing action to work properly)
                  onClick={() => router.push("/login/loginStudent")}
                >
                  Log Out
                </Button>
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
