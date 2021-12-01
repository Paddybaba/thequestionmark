import React, { useEffect, useState } from "react";
import Head from "next/head";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useRouter } from "next/router";
import path from "../api/mypaths";
import Resizer from "react-image-file-resizer";

//// Resize image before uploading
const resizeFile = (file) =>
  new Promise((resolve, reject) => {
    Resizer.imageFileResizer(
      file,
      600,
      400,
      "JPEG",
      100,
      0,
      (uri) => {
        resolve(uri);
      },
      "file"
    );
  });

const addQuestion2 = (props) => {
  console.log("path", path);
  var stored_teacher;

  const initialValues = {
    subject: "Science",
    author: "",
    class: [],
    model: "All-Text", //Other images
    question: {
      quest: { image: "", que: "" },
      options: [
        { image: "", option: "A" },
        { image: "", option: "B" },
        { image: "", option: "C" },
        { image: "", option: "D" },
      ],
      correct_ans: "A",
      marks: 0,
    },
    year: 2021,
    difficulty: "Easy", //easy, medium ,hard
  };

  const empty_image_array = {
    quest_image: null,
    optionA: null,
    optionB: null,
    optionC: null,
    optionD: null,
  };
  const [newQuestion, setQuestion] = useState(initialValues);
  const [questImage, setQuestImage] = useState();
  useEffect(() => {
    stored_teacher = JSON.parse(localStorage.getItem("teacher")).teacher_name;
    setQuestion({ ...newQuestion, author: stored_teacher });
  }, []);

  const router = useRouter();

  ///// Get Image file from input, resize it and add to images State
  const getQuestImage = async (event) => {
    try {
      const image = event.target.files[0];
      const resizedImage = await resizeFile(image);
      console.log("original", image);
      console.log("resized", resizedImage);
      setQuestImage(resizedImage);
    } catch (err) {
      console.log(err.message);
    }
  };
  //   function validateForm() {
  //     return (
  //       newQuestion.question.quest.length > 0 &&
  //       newQuestion.question.correct_ans.length > 0
  //     );
  //   }
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
    tempArray[index].option = e.target.value;
    setQuestion({
      ...newQuestion,
      question: { ...newQuestion.question, options: tempArray },
    });
  };

  async function onSubmitQuestion() {
    try {
      const resposne = await axios.post(`${path}/addQuestion`, newQuestion);
      const message = await resposne.data;
      console.log("message", message);
      setQuestion({
        ...initialValues,
        subject: newQuestion.subject,
        author: newQuestion.author,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div className="row gx-0" style={{ backgroundColor: "#d1d1d1" }}>
      <Head>
        <title>New Question</title>
      </Head>
      <div className="col-10 mt-5 mx-auto">
        <div
          className="simple-link"
          style={{ position: "absolute", top: 5, right: 10, cursor: "pointer" }}
          onClick={() => router.push("/")}
        >
          Home
        </div>
        <div className="text-center text-uppercase fs-3 fw-bold mb-3">
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
            <select
              name="model"
              className="form-select"
              aria-label="Default select example"
              onChange={handleInputChange}
            >
              <option value="All-Text">All-Text</option>
              <option value="Image-Question-Text-Options">
                Image-Question-Text-Options
              </option>
              <option value="Text-Question-Image-Options">
                Text-Question-Image-Options
              </option>
              <option value="Combined">Combined</option>
            </select>
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
          <Form.Group
            className="mt-4"
            style={{
              backgroundColor: "honeydew",
              padding: "5px",
              borderRadius: 4,
            }}
            size="lg"
            controlId="quest"
          >
            {newQuestion.model == "Image-Question-Text-Options" ||
            newQuestion.model == "Combined" ? (
              <div>
                {!questImage ? <Form.Label>Question Image</Form.Label> : null}
                {!questImage ? null : (
                  <img
                    style={{
                      height: 100,
                      width: 120,
                      padding: 2,
                      borderRadius: 5,
                    }}
                    src={URL.createObjectURL(questImage)}
                  />
                )}
                <input
                  id="quest-image"
                  accept="image/*"
                  onChange={(e) => getQuestImage(e)}
                  className="image-input"
                  name="quest-image"
                  type="file"
                />
              </div>
            ) : null}
            <Form.Label>Question Text</Form.Label>
            <Form.Control
              style={{ maxHeight: 300 }}
              contentEditable
              type="text"
              value={newQuestion.question.quest.que}
              onChange={(e) => {
                setQuestion({
                  ...newQuestion,
                  question: { ...newQuestion.question, quest: e.target.value },
                });
              }}
            />
          </Form.Group>
          <Form.Group
            className="mt-4"
            size="lg"
            controlId="option"
            style={{
              backgroundColor: "#ffe3fb",
              padding: "5px",
              borderRadius: 4,
            }}
          >
            {newQuestion.model == "Text-Question-Image-Options" ||
            newQuestion.model == "Combined" ? (
              <div>
                <Form.Label>Option A Image</Form.Label>
                <input className="image-input" type="file" />
              </div>
            ) : null}
            <Form.Label>Option A</Form.Label>
            <Form.Control
              type="text"
              value={newQuestion.question.options[0].option}
              onChange={(e) => addOptions(e, 0)}
            />
          </Form.Group>
          <Form.Group
            className="mt-4"
            style={{
              backgroundColor: "#ffe3fb",
              padding: "5px",
              borderRadius: 4,
            }}
            size="lg"
            controlId="option"
          >
            {newQuestion.model == "Text-Question-Image-Options" ||
            newQuestion.model == "Combined" ? (
              <div>
                <Form.Label>Option A Image</Form.Label>
                <input className="image-input" type="file" />
              </div>
            ) : null}
            <Form.Label>Option B</Form.Label>
            <Form.Control
              type="text"
              value={newQuestion.question.options[1].option}
              onChange={(e) => addOptions(e, 1)}
            />
          </Form.Group>
          <Form.Group
            className="mt-4"
            size="lg"
            controlId="option"
            style={{
              backgroundColor: "#ffe3fb",
              padding: "5px",
              borderRadius: 4,
            }}
          >
            {newQuestion.model == "Text-Question-Image-Options" ||
            newQuestion.model == "Combined" ? (
              <div>
                <Form.Label>Option A Image</Form.Label>
                <input className="image-input" type="file" />
              </div>
            ) : null}
            <Form.Label>Option C</Form.Label>
            <Form.Control
              type="text"
              value={newQuestion.question.options[2].option}
              onChange={(e) => addOptions(e, 2)}
            />
          </Form.Group>
          <Form.Group
            className="mt-4"
            size="lg"
            controlId="option"
            style={{
              backgroundColor: "#ffe3fb",
              padding: "5px",
              borderRadius: 4,
            }}
          >
            {newQuestion.model == "Text-Question-Image-Options" ||
            newQuestion.model == "Combined" ? (
              <div>
                <Form.Label>Option A Image</Form.Label>
                <input className="image-input" type="file" />
              </div>
            ) : null}
            <Form.Label>Option D</Form.Label>
            <Form.Control
              type="text"
              value={newQuestion.question.options[3].option}
              onChange={(e) => addOptions(e, 3)}
            />
          </Form.Group>
          <Form.Group
            className="mt-4"
            size="lg"
            controlId="correct_ans"
            style={{ color: "#32a852" }}
          >
            <Form.Label>Correct Answer</Form.Label>
            <select
              className="form-select"
              style={{ backgroundColor: "honeydew" }}
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
              <option value={newQuestion.question.options[0].option}>
                {newQuestion.question.options[0].option}
              </option>
              <option value={newQuestion.question.options[1].option}>
                {newQuestion.question.options[1].option}
              </option>
              <option value={newQuestion.question.options[2].option}>
                {newQuestion.question.options[2].option}
              </option>
              <option value={newQuestion.question.options[3].option}>
                {newQuestion.question.options[3].option}
              </option>
            </select>
          </Form.Group>
          <Button
            block="true"
            className="mt-4 mb-5"
            // type="submit" (This is not allowing action to work properly)
            // disabled={!validateForm()}
            onClick={onSubmitQuestion}
          >
            Submit Question
          </Button>
        </Form>
        {/* <p
          className="mt-4 simple-link "
          onClick={() => router.push("/login/loginTeacher")}
        >
          Already registered, go to Login
        </p> */}
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
export default addQuestion2;
