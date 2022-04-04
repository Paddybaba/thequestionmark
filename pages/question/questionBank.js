import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import path from "../api/mypaths";
import QuestionCard from "../../src/components/cards/QuestionCard";
import QbankNB from "../../src/components/navbars/QbankNB";
import QuestionModal from "../../src/components/modals/QuestionModal";
const myQuestionBank = (props) => {
  const { teacher_id } = props.teacher;
  const [myQuestions, setMyQuestions] = useState([]);
  const [showQModal, setShowQModal] = useState(false);
  const [clickedQuestion, setClickedQuestion] = useState(demo_question);
  // Call getmyquestions and update myQuestion array on load
  useEffect(async () => {
    const data = await getMyQuestions(teacher_id);
    setMyQuestions(data);
  }, []);

  function handleClose() {
    setShowQModal(false);
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
      />
      <QbankNB />
      <div className="qbank_container">
        {myQuestions.map((item, index) => {
          return (
            <div onClick={() => onQBoxClick(item)} key={index}>
              <QuestionCard item={item} />
            </div>
          );
        })}
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
const mstp = (state) => ({
  teacher: state.studentReducer.teacher,
});
export default connect(mstp)(myQuestionBank);
