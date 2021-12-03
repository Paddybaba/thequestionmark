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
    model: "Text-Question-Text-Options", //Other images
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

  const empty_image_array = [];
  const [newQuestion, setQuestion] = useState(initialValues);
  const [questImage, setQuestImage] = useState();
  const [allImage, setAllImages] = useState({
    quest_image: null,
    optionA: null,
    optionB: null,
    optionC: null,
    optionD: null,
  });
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
      setAllImages({ ...allImage, quest_image: resizedImage });
      console.log("All images : ", allImage);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getOptionImageA = async (event) => {
    try {
      const image = event.target.files[0];
      const resizedImage = await resizeFile(image);
      setAllImages({ ...allImage, optionA: resizedImage });
      console.log(allImage);
    } catch (err) {
      console.log(err.message);
    }
  };
  const getOptionImageB = async (event) => {
    try {
      const image = event.target.files[0];
      const resizedImage = await resizeFile(image);
      setAllImages({ ...allImage, optionB: resizedImage });
      console.log(allImage);
    } catch (err) {
      console.log(err.message);
    }
  };
  const getOptionImageC = async (event) => {
    try {
      const image = event.target.files[0];
      const resizedImage = await resizeFile(image);
      setAllImages({ ...allImage, optionC: resizedImage });
      console.log(allImage);
    } catch (err) {
      console.log(err.message);
    }
  };
  const getOptionImageD = async (event) => {
    try {
      const image = event.target.files[0];
      const resizedImage = await resizeFile(image);
      setAllImages({ ...allImage, optionD: resizedImage });
      console.log(allImage);
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
      console.log("Images", allImage);
      console.log("question", newQuestion);
      let fd = new FormData();
      fd.append("question", JSON.stringify(newQuestion));

      if (allImage.quest_image)
        fd.append("images", allImage.quest_image, "questionImage");
      if (allImage.optionA) fd.append("images", allImage.optionA, "optionA");
      if (allImage.optionB) fd.append("images", allImage.optionB, "optionB");
      if (allImage.optionC) fd.append("images", allImage.optionC, "optionC");
      if (allImage.optionD) fd.append("images", allImage.optionD, "optionD");

      // console.log("formData", fd.get("quest_image"));
      const resposne = await axios.post(
        "http://localhost:8080/addQuestion",
        fd,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const message = await resposne.data;
      if (message) alert("Question Uploaded Successfully !!!");
      setAllImages({
        quest_image: null,
        optionA: null,
        optionB: null,
        optionC: null,
        optionD: null,
      });
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
          <Form.Group className="mt-4" size="lg" controlId="model">
            <Form.Label>Model</Form.Label>
            <select
              name="model"
              className="form-select"
              aria-label="Default select example"
              onChange={handleInputChange}
              value={newQuestion.model}
            >
              <option value="Text-Question-Text-Options">
                Text-Question-Text-Options
              </option>
              <option value="Image-Question-Text-Options">
                Image-Question-Text-Options
              </option>
              <option value="Text-Question-Image-Options">
                Text-Question-Image-Options
              </option>
              <option value="Combined">Combined</option>
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
                {!allImage.quest_image ? (
                  <Form.Label>Question Image</Form.Label>
                ) : null}
                {!allImage.quest_image ? null : (
                  <img
                    style={{
                      height: 100,
                      width: 120,
                      padding: 2,
                      borderRadius: 5,
                    }}
                    src={URL.createObjectURL(allImage.quest_image)}
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
                const quest = { image: "", que: e.target.value };
                // console.log("quest", quest);
                setQuestion({
                  ...newQuestion,
                  question: {
                    ...newQuestion.question,
                    quest: quest,
                  },
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
                {allImage.optionA == null ? (
                  <Form.Label>Option A Image</Form.Label>
                ) : null}
                {!allImage.optionA ? null : (
                  <img
                    style={{
                      height: 100,
                      width: 120,
                      padding: 2,
                      borderRadius: 5,
                    }}
                    src={URL.createObjectURL(allImage.optionA)}
                  />
                )}
                <input
                  id="optionA-image"
                  accept="image/*"
                  onChange={(e) => getOptionImageA(e)}
                  className="image-input"
                  name="quest-image"
                  type="file"
                />
              </div>
            ) : null}
            <Form.Label>Option A</Form.Label>
            <Form.Control
              type="text"
              value={newQuestion.question.options[0].option}
              onChange={(e) => {
                addOptions(e, 0);
                setQuestion({
                  ...newQuestion,
                  question: {
                    ...newQuestion.question,
                    correct_ans: e.target.value,
                  },
                });
              }}
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
                {allImage.optionB == null ? (
                  <Form.Label>Option B Image</Form.Label>
                ) : null}
                {!allImage.optionB ? null : (
                  <img
                    style={{
                      height: 100,
                      width: 120,
                      padding: 2,
                      borderRadius: 5,
                    }}
                    src={URL.createObjectURL(allImage.optionB)}
                  />
                )}
                <input
                  id="optionB-image"
                  accept="image/*"
                  onChange={(e) => getOptionImageB(e)}
                  className="image-input"
                  name="quest-image"
                  type="file"
                />
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
                {allImage.optionC == null ? (
                  <Form.Label>Option C Image</Form.Label>
                ) : null}
                {!allImage.optionC ? null : (
                  <img
                    style={{
                      height: 100,
                      width: 120,
                      padding: 2,
                      borderRadius: 5,
                    }}
                    src={URL.createObjectURL(allImage.optionC)}
                  />
                )}
                <input
                  id="optionC-image"
                  accept="image/*"
                  onChange={(e) => getOptionImageC(e)}
                  className="image-input"
                  name="quest-image"
                  type="file"
                />
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
                {allImage.optionD == null ? (
                  <Form.Label>Option D Image</Form.Label>
                ) : null}
                {!allImage.optionD ? null : (
                  <img
                    style={{
                      height: 100,
                      width: 120,
                      padding: 2,
                      borderRadius: 5,
                    }}
                    src={URL.createObjectURL(allImage.optionD)}
                  />
                )}
                <input
                  id="optionD-image"
                  accept="image/*"
                  onChange={(e) => getOptionImageD(e)}
                  className="image-input"
                  name="quest-image"
                  type="file"
                />
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
              value={newQuestion.question.correct_ans}
              onChange={(e) => {
                setQuestion({
                  ...newQuestion,
                  question: {
                    ...newQuestion.question,
                    correct_ans: e.target.value,
                  },
                });
              }}
              // defaultValue={newQuestion.question.options[0]}
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
