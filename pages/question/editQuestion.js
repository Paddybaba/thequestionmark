import React, { useEffect, useState } from "react";
import Head from "next/head";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import axios from "axios";
import { Router, useRouter } from "next/router";
import path from "../api/mypaths";
import Resizer from "react-image-file-resizer";
import { ProgressBar } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import AddQNB from "../../src/components/navbars/AddQNB";
import Spinner from "react-bootstrap/Spinner";

//// Resize image before uploading
const resizeFile = (file) =>
  new Promise((resolve, reject) => {
    Resizer.imageFileResizer(
      file,
      600,
      400,
      "JPEG",
      80,
      0,
      (uri) => {
        resolve(uri);
      },
      "file"
    );
  });

const editQuestion = (props) => {
  const router = useRouter();
  console.log("quesry", props.question);
  var stored_teacher;

  const empty_image_array = [];
  const [newQuestion, setQuestion] = useState(props.question);
  // const [questImage, setQuestImage] = useState();
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showSpinner, setSpinner] = useState(false);
  const [show, setShow] = useState(false);
  const [allImage, setAllImages] = useState({
    quest_image: null,
    optionA: null,
    optionB: null,
    optionC: null,
    optionD: null,
  });
  ///// Get Image file from input, resize it and add to images State
  const getQuestImage = async (event) => {
    try {
      const image = event.target.files[0];
      const resizedImage = await resizeFile(image);
      setAllImages({ ...allImage, quest_image: resizedImage });
      // console.log("All images : ", allImage);
    } catch (err) {
      // console.log(err.message);
    }
  };

  const getOptionImageA = async (event) => {
    try {
      const image = event.target.files[0];
      const resizedImage = await resizeFile(image);
      setAllImages({ ...allImage, optionA: resizedImage });
      // console.log(allImage);
    } catch (err) {
      // console.log(err.message);
    }
  };
  const getOptionImageB = async (event) => {
    try {
      const image = event.target.files[0];
      const resizedImage = await resizeFile(image);
      setAllImages({ ...allImage, optionB: resizedImage });
      // console.log(allImage);
    } catch (err) {
      // console.log(err.message);
    }
  };
  const getOptionImageC = async (event) => {
    try {
      const image = event.target.files[0];
      const resizedImage = await resizeFile(image);
      setAllImages({ ...allImage, optionC: resizedImage });
      // console.log(allImage);
    } catch (err) {
      // console.log(err.message);
    }
  };
  const getOptionImageD = async (event) => {
    try {
      const image = event.target.files[0];
      const resizedImage = await resizeFile(image);
      setAllImages({ ...allImage, optionD: resizedImage });
      // console.log(allImage);
    } catch (err) {
      // console.log(err.message);
    }
  };

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
    setSpinner(true);
    try {
      // console.log("Images", allImage);
      // console.log("question", newQuestion);
      let fd = new FormData();
      fd.append("question", JSON.stringify(newQuestion));

      if (allImage.quest_image)
        fd.append("images", allImage.quest_image, "questionImage");
      if (allImage.optionA) fd.append("images", allImage.optionA, "optionA");
      if (allImage.optionB) fd.append("images", allImage.optionB, "optionB");
      if (allImage.optionC) fd.append("images", allImage.optionC, "optionC");
      if (allImage.optionD) fd.append("images", allImage.optionD, "optionD");

      // console.log("formData", fd.get("quest_image"));
      var config = {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          let percent = Math.floor((loaded * 100) / total);
          console.log(`${loaded}kb of ${total}kb | ${percent}%`);

          if (percent < 100) {
            setUploadProgress(percent);
          }
        },
      };
      const resposne = await axios.post(`${path}/editQuestion`, fd, config, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const message = await resposne.data;
      setSpinner(false);
      if (message) {
        setShow(true);
        setTimeout(() => setShow(false), 2000);
      }

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
        year: newQuestion.year,
        class: newQuestion.class,
      });
      // Finish Progress bar after getting response
      setUploadProgress(100, () => {
        setTimeout(() => {
          this.setState({ uploadPercentage: 0 });
        }, 500);
      });
      document.getElementById("question-text").focus();
      // document.getElementById("question-text").scrollIntoView();
      window.scrollTo(0, 500);
    } catch (err) {
      alert("Could not upload the question !!!");
      // console.log(err.message);
    }
  }

  return (
    <div className="row gx-0 question-bg">
      <Head>
        <title>Edit Question</title>
      </Head>
      <AddQNB />
      <div className="col-10 mx-auto">
        <div className="my-alert">
          <Alert
            variant="info"
            show={show}
            onClose={() => setShow(false)}
            dismissible
          >
            Question Uploaded Successfully !!!
          </Alert>
        </div>
        {showSpinner ? (
          <div className="my-spinner">
            <Spinner animation="border" variant="info" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : null}
        {/* <div className="text-center text-uppercase fs-3 fw-bold mb-3">
          Add New Question
        </div> */}
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
          <Form.Group className="mt-4" size="lg" controlId="class">
            <Form.Label>Class</Form.Label>
            <select
              name="class"
              className="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                setQuestion({ ...newQuestion, class: e.target.value });
              }}
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
              backgroundColor: "#FF9671",
              padding: "5px",
              borderRadius: 4,
            }}
            size="lg"
            // controlId="quest"
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
              as="textarea"
              rows={8}
              id="question-text"
              name="question_text"
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
              backgroundColor: "#845EC2",
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
              backgroundColor: "#845EC2",
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
              backgroundColor: "#845EC2",
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
              backgroundColor: "#845EC2",
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
          <Form.Group className="mt-4" size="lg" controlId="correct_ans">
            <Form.Label>Correct Answer</Form.Label>
            <select
              className="form-select"
              style={{ backgroundColor: "#68EDCB" }}
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
          <Form.Group className="mt-4 mb-3" size="lg" controlId="explanation">
            <Form.Label>Explanation</Form.Label>
            <Form.Control
              type="text"
              name="explanation"
              value={newQuestion.question.explanation}
              onChange={(e) =>
                setQuestion({
                  ...newQuestion,
                  question: {
                    ...newQuestion.question,
                    explanation: e.target.value,
                  },
                })
              }
            />
          </Form.Group>
          {uploadProgress > 0 && uploadProgress < 100 ? (
            <ProgressBar
              now={uploadProgress}
              animated
              label={`${uploadProgress}%`}
            />
          ) : null}
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

async function saveToRecent(options) {}

const mstp = (state) => ({
  question: state.studentReducer.editQuestion,
});
export default connect(mstp)(editQuestion);
// export default editQuestion;
