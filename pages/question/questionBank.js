import axios from "axios";
import React, { useEffect, useState } from "react";
import { setQBank } from "../../redux/actions";
import { connect } from "react-redux";
import path from "../api/mypaths";
import QuestionCard from "../../src/components/cards/QuestionCard";
import QbankNB from "../../src/components/navbars/QbankNB";
import QuestionModal from "../../src/components/modals/QuestionModal";
import Form from 'react-bootstrap/Form'
import MyDropdown from "../../src/components/dropdowns/Mydropdown";
import Spinner from "react-bootstrap/Spinner";
import { Alert } from "react-bootstrap";
const myQuestionBank = (props) => {
  const { teacher_id } = props.mystate.teacher;
  const [myQuestions, setMyQuestions] = useState([]);
  const [showQModal, setShowQModal] = useState(false);
  const [clickedQuestion, setClickedQuestion] = useState(demo_question);
  const [showSpinner, setShowSpinner] = useState(false);
  const [deleteAlert, setdeleteAlert] = useState(false);
  // Call getmyquestions and update myQuestion array on load
  useEffect(async () => {
    // console.log(props.mystate)
    if (props.mystate.questionBank != null) {
      setMyQuestions(props.mystate.questionBank);
    } else {
      setShowSpinner(true);
      const data = await getMyQuestions(teacher_id);
      props.setQBankHandler(data);
      setMyQuestions(data);
    }
    setShowSpinner(false);
  }, []);

  function handleClose() {
    setShowQModal(false);
    window.location.reload();
    if (deleteAlert) {
      setInterval(() => {
        setdeleteAlert(false);
      }, 2000);
    }
  }
  /// Define Question Box Click function
  const onQBoxClick = (item) => {
    setClickedQuestion(item);
    setShowQModal(true);
  };
  return (
    <div>
      <QuestionModal
        show={showQModal}
        handleClose={handleClose}
        item={clickedQuestion}
        deleteAlert={deleteAlert}
        setdeleteAlert={setdeleteAlert}
      />
      <QbankNB setQBankHandler={props.setQBankHandler} />

      {showSpinner ? <Spinner animation="grow" /> : null}
      <div className="filter-row">
        <div className="my-button">Filter</div>
        <div className="filter-row2">
        <div>
        <Form.Select aria-label="Default select example" style={{paddingTop : 0, paddingBottom : 0, margin : 10}}>
  <option>Subject</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
        </div>
        <div>Year</div>
        <div>Keywords</div>
        <div>Standard</div>
      </div>
      </div>
      
      <div className="qbank_container">
        {myQuestions.map((item, index) => {
          return (
            <div onClick={() => onQBoxClick(item)} key={index}>
              <QuestionCard item={item} />
            </div>
          );
        })}
        {/* <Alert
          style={{ position: "fixed", width: "100%" }}
          show={deleteAlert}
          dismissible={true}
          variant="success"
        >
          Question deleted successfully
        </Alert> */}
        {deleteAlert ? (
          <div className="my-alert2">
            <p>Question deleted Successfully !!!</p>
          </div>
        ) : null}
      </div>
      {/* <button onClick={() => getMyQuestions(teacher_id)}>Get Questions</button> */}
    </div>
  );
};
const demo_question = {
  author: "paddybaba@gmail.com",
  class: "Class-1",
  model: "Image-Question-Text-Options",
  question: {
    correct_ans: "2",
    explanation:
      "Brain, also known as cerebrum has two hemisheres Right and Left.",
    marks: 0,
    options: [
      { image: "", option: "3" },
      { image: "", option: "4" },
      { image: "", option: "2" },
      { image: "", option: "1" },
    ],

    quest: {
      image:
        "https://paddy-photo-bucket.s3.amazonaws.com/1645848581229-questionImage.jpeg",
      que: "How many hemispheres are there in human brain?",
    },
    subject: "Science",
    year: 2021,
    __v: 0,
    _id: "61ab9f6122444a556d1869bd",
  },
};
async function getMyQuestions(teacher_id) {
  const response = await axios.post(`${path}/getmyquestions`, {
    author_email: teacher_id,
  });
  return response.data;
}
const mdtp = (dispatch) => ({
  setQBankHandler: (data) => {
    dispatch(setQBank(data));
  },
});
const mstp = (state) => ({
  mystate: state.studentReducer,
});
export default connect(mstp, mdtp)(myQuestionBank);
