import React, { useEffect, useState } from "react";
import Head from "next/head";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useRouter } from "next/router";
// import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

const addQuestion = (props) => {
  const initialValues = {
    subject: "Science",
    author: "",
    model: "text", //Other images
    question: {
      quest: "",
      options: ["", "", "", ""],
      correct_ans: "",
      marks: 0,
    },
    year: 2021,
    difficulty: "Easy", //easy, medium ,hard
  };

  const [newQuestion, setQuestion] = useState(initialValues);
  useEffect(() => {
    const stored_teacher = JSON.parse(
      localStorage.getItem("teacher")
    ).teacher_name;
    setQuestion({ ...newQuestion, author: stored_teacher });
  }, []);

  const router = useRouter();

  function validateForm() {
    return (
      newQuestion.question.quest.length > 0 &&
      newQuestion.question.correct_ans.length > 0
    );
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // console.log("name of field :", name);
    setQuestion({
      ...newQuestion,
      [name]: value,
    });
  };

  const addOptions = (e, index) => {
    const tempArray = newQuestion.question.options;
    tempArray[index] = e.target.value;
    setQuestion({
      ...newQuestion,
      question: { ...newQuestion.question, options: tempArray },
    });
  };

  async function onSubmitQuestion() {
    try {
      const resposne = await axios.post(
        "http://localhost:8080/addQuestion",
        newQuestion
      );
      const message = await resposne.data;
      console.log("message", message);
    } catch (err) {
      console.log(err.message);
    }
  }
  //   async function handleSubmit() {
  //     try {
  //       const resposne = await axios.post(
  //         "http://localhost:8080/registerTeacher",
  //         {
  //           teacher_id: email,
  //           teacher_name: teacherName,
  //           password: password,
  //         }
  //       );
  //       const data = await resposne.data; // receive : Registered Succesfully

  //       if (resposne.status === 400 || !data) {
  //         window.alert("Something went wrong during registration !!!");
  //       } else {
  //         const teacher = {
  //           teacher_id: email,
  //           teacher_name: teacherName,
  //         };
  //         console.log("Teacher Registered", teacher);
  //         // props.userLoginHandler(student);       ********************
  //         // router.push("/test/selectTest");        *****************
  //       }
  //     } catch (err) {
  //       alert("fetch error");
  //       console.log(err.message);
  //     }
  //   }
  // console.log(newQuestion);
  return (
    <div
      className="row gx-0"
      // style={{ height: "100vh", backgroundColor: "honeydew" }}
    >
      <Head>
        <title>New Question</title>
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
          Add New Question
        </div>
        <Form>
          <Form.Group size="lg" controlId="teacherName">
            <Form.Label>Subject</Form.Label>
            <select
              name="subject"
              className="form-select"
              aria-label="Default select example"
              onChange={handleInputChange}
              defaultValue="Science"
            >
              <option value="Mathematics">Mathematics</option>
              <option value="General Knowledge">General Knowledge</option>
              <option value="Science">Science</option>
              <option value="English">English</option>
            </select>
          </Form.Group>
          <Form.Group className="mt-4" size="lg" controlId="author">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              defaultValue={newQuestion.author}
              readOnly
            />
          </Form.Group>
          <Form.Group className="mt-4" size="lg" controlId="model">
            <Form.Label>Model</Form.Label>
            <Form.Control
              name="model"
              type="text"
              value={newQuestion.model}
              onChange={handleInputChange}
              // readOnly
            />
          </Form.Group>
          <Form.Group className="mt-4" size="lg" controlId="year">
            <Form.Label>Year</Form.Label>
            <Form.Control
              type="number"
              name="year"
              value={newQuestion.year}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mt-4" size="lg" controlId="difficulty">
            <Form.Label>Difficulty</Form.Label>
            <select
              name="difficulty"
              className="form-select"
              aria-label="Default select example"
              onChange={handleInputChange}
              defaultValue="Easy"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
              <option value="Scholar">Scholar</option>
            </select>
          </Form.Group>
          <Form.Group className="mt-4" size="lg" controlId="quest">
            <Form.Label>Question</Form.Label>
            <Form.Control
              type="text"
              value={newQuestion.question.quest}
              onChange={(e) => {
                setQuestion({
                  ...newQuestion,
                  question: { ...newQuestion.question, quest: e.target.value },
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mt-4" size="lg" controlId="option">
            <Form.Label>Option A</Form.Label>
            <Form.Control
              type="text"
              value={newQuestion.question.options[0]}
              onChange={(e) => addOptions(e, 0)}
            />
          </Form.Group>
          <Form.Group className="mt-4" size="lg" controlId="option">
            <Form.Label>Option B</Form.Label>
            <Form.Control
              type="text"
              value={newQuestion.question.options[1]}
              onChange={(e) => addOptions(e, 1)}
            />
          </Form.Group>
          <Form.Group className="mt-4" size="lg" controlId="option">
            <Form.Label>Option C</Form.Label>
            <Form.Control
              type="text"
              value={newQuestion.question.options[2]}
              onChange={(e) => addOptions(e, 2)}
            />
          </Form.Group>
          <Form.Group className="mt-4" size="lg" controlId="option">
            <Form.Label>Option D</Form.Label>
            <Form.Control
              type="text"
              value={newQuestion.question.options[3]}
              onChange={(e) => addOptions(e, 3)}
            />
          </Form.Group>
          <Form.Group className="mt-4" size="lg" controlId="correct_ans">
            <Form.Label>Correct Answer</Form.Label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                setQuestion({
                  ...newQuestion,
                  question: {
                    ...newQuestion.question,
                    correct_ans: e.target.value,
                  },
                });
              }}
              defaultValue={newQuestion.question.options[0]}
            >
              <option value={newQuestion.question.options[0]}>
                {newQuestion.question.options[0]}
              </option>
              <option value={newQuestion.question.options[1]}>
                {newQuestion.question.options[1]}
              </option>
              <option value={newQuestion.question.options[2]}>
                {newQuestion.question.options[2]}
              </option>
              <option value={newQuestion.question.options[3]}>
                {newQuestion.question.options[3]}
              </option>
            </select>
          </Form.Group>
          <Button
            block="true"
            className="mt-4"
            // type="submit" (This is not allowing action to work properly)
            disabled={!validateForm()}
            onClick={onSubmitQuestion}
          >
            Submit Question
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
// const mdtp = (dispatch) => ({
//   teacherLoginHandler: (data) => dispatch(userLogin(data)),
// });
// const mstp = (state) => ({
//   student: state.studentReducer,
// });
export default addQuestion;
