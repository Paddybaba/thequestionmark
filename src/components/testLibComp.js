import React from "react";
import { connect } from "react-redux";
import { selectOptions, setQuestions } from "../../redux/actions";
import axios from "axios";
import path from "../../pages/api/mypaths";
import router from "next/router";
const TestLibComp = (props) => {
  const { subject, author, standard, year, published } = props;

  async function onComponentClick() {
    const options = {
      teacher_id,
      subject,
      author,
      year,
      standard,
    };
    try {
      props.selectOptionsHandler(options);
      const response = await axios.post(`${path}/getquest`, options);
      const questions = await response.data;
      if (questions.length > 0) {
        props.setQuestionsHandler(questions);
        router.push("/test/start_test");
      } else {
        alert("No tests available");
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  return (
    <div className="test-lib-comp" onClick={() => onComponentClick()}>
      <div className="lib-subject">{subject}</div>
      <div className="lib-author">{author}</div>
      <div className="d-flex">
        <div className="lib-standard">{standard}</div>
        <div className="lib-year">{year}</div>
      </div>
      <div className="lib-published">{published}</div>
    </div>
  );
};

const mdtp = (dispatch) => ({
  selectOptionsHandler: (options) => dispatch(selectOptions(options)),
  setQuestionsHandler: (questions) => dispatch(setQuestions(questions)),
});
const mstp = (state) => ({
  student: state.studentReducer,
});
export default connect(mstp, mdtp)(TestLibComp);
