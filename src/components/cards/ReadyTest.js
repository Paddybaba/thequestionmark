import router from "next/router";
import React from "react";
import { connect } from "react-redux";
import { selectOptions, setQuestions } from "../../../redux/actions";
// import box1 from "../../../public/box1.png";

const ReadyTest = (props) => {
  //   console.log(test);
  const { subject, author, published, standard, year, questionList, keywords } =
    props.test;
  var bg;
  var testOptions = {
    subject,
    author,
    standard,
    year,
  };

  const onCardClick = async () => {
    var questions = questionList;
    if (questions.length > 0) {
      props.setQuestionsHandler(questions);
      router.push("/test/start_test");
    } else {
      alert("NO tests available");
    }
  };

  switch (subject) {
    case "Mathematics": {
      bg = `url(/math_box.png)`;
      break;
    }
    case "Science": {
      bg = `url(/science_box.png)`;
      break;
    }
    case "GK": {
      bg = `url(/gk_box.png)`;
      break;
    }
  }
  return (
    <div
      className="readytest_1 blur-box"
      style={{ backgroundImage: bg }}
      onClick={() => onCardClick()}
    >
      <h1>{subject}</h1>

      <div className={"readytest_2"}>
        <h2>{author}</h2>
        <p>{changeDateFormat(published)}</p>
        <p>Topic : {keywords}</p>
        <p>Questions : {questionList.length}</p>
      </div>
    </div>
  );
};

const changeDateFormat = (timestamp) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(timestamp).toLocaleDateString(undefined, options);
};
const mdtp = (dispatch) => ({
  selectOptionsHandler: (options) => dispatch(selectOptions(options)),
  setQuestionsHandler: (questions) => dispatch(setQuestions(questions)),
});
const mstp = (state) => ({
  student: state.studentReducer,
});
export default connect(mstp, mdtp)(ReadyTest);
// export default ReadyTest;
