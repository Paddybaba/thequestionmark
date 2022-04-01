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
  const [showQModal, setShowQModal] = useState(false)
  // Call getmyquestions and update myQuestion array on load
  useEffect(async () => {
    const data = await getMyQuestions(teacher_id);
    setMyQuestions(data);
  }, []);

  function handleClose () {
    setShowQModal(false)
}
  return (
    <div>
      <QuestionModal show={showQModal} handleClose={handleClose}/>
      <QbankNB />
      <div className="qbank_container" onClick={()=> setShowQModal(true)}>
        {myQuestions.map((item, index) => {
          return <QuestionCard item={item} key={index} />;
        })}
      </div>
      {/* <button onClick={() => getMyQuestions(teacher_id)}>Get Questions</button> */}
    </div>
  );
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
