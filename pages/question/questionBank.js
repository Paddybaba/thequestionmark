import axios from "axios";
import React, { useEffect, useState } from "react";
import { setQBank, editQuestion } from "../../redux/actions";
import { connect } from "react-redux";
import path from "../api/mypaths";
import QuestionCard from "../../src/components/cards/QuestionCard";
import QbankNB from "../../src/components/navbars/QbankNB";
import QuestionModal from "../../src/components/modals/QuestionModal";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";

const myQuestionBank = (props) => {
  const { teacher_id } = props.mystate.teacher;
  const [myQuestions, setMyQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [filters, setFilters] = useState({
    standard: "Select Standard",
    subject: "All Subjects",
    year: "Select Year",
  });
  const [showQModal, setShowQModal] = useState(false);
  const [clickedQuestion, setClickedQuestion] = useState(demo_question);
  const [showSpinner, setShowSpinner] = useState(false);
  const [deleteAlert, setdeleteAlert] = useState(false);
  const [subjectList, setSubjectList] = useState([]);
  const [yearList, setYearList] = useState([]);
  const [standardList, setstandardList] = useState([]);
  const [showFilters, setShowFilter] = useState(false);
  const [createTestMode, setCreateTestMode] = useState(false);

  /// FILTER QUESTIONS
  /// Get list of subjects/years/standards
  function activateFilters() {
    const allSubjects = myQuestions.map((item, index) => {
      return item.subject;
    });
    const mySubjects = allSubjects.filter(function (item, pos, self) {
      return self.indexOf(item) == pos;
    });
    const allYears = myQuestions.map((item, index) => {
      return item.year.toString();
    });
    const myYears = allYears.filter(function (item, pos, self) {
      return self.indexOf(item) == pos;
    });
    const allClass = myQuestions.map((item, index) => {
      return item.class;
    });

    const myClasses = allClass.filter(function (item, pos, self) {
      return self.indexOf(item) == pos;
    });
    setSubjectList(mySubjects);
    setYearList(myYears);
    setstandardList(myClasses);
    setShowFilter(true);
  }

  // Call getmyquestions and update myQuestion array on load
  useEffect(async () => {
    // console.log(props.mystate)
    if (props.mystate.questionBank != null) {
      setMyQuestions(props.mystate.questionBank);
      setFilteredQuestions(props.mystate.questionBank);
    } else {
      setShowSpinner(true);
      const data = await getMyQuestions(teacher_id);
      //update state with qBank
      props.setQBankHandler(data);
      setMyQuestions(data);
      setFilteredQuestions(data);
    }
    // console.log("All Q", myQuestions);
    ///Apply filter
    // setFilteredQuestions(myQuestions);
    setShowSpinner(false);
  }, []);

  useEffect(() => {
    if (
      filters.subject === "All Subjects" &&
      filters.standard === "Select Standard" &&
      filters.year === "Select Year"
    ) {
      // console.log("Filters not active");
      setFilteredQuestions(props.mystate.questionBank);
    } else {
      // console.log("filters active", filters);
      let tempArray = props.mystate.questionBank;
      if (filters.subject != "All Subjects") {
        tempArray = tempArray.filter(
          (question) => question.subject === filters.subject
        );
      }
      if (filters.year != "Select Year") {
        tempArray = tempArray.filter(
          (question) => question.year.toString() === filters.year
        );
      }
      if (filters.standard != "Select Standard") {
        tempArray = tempArray.filter(
          (question) => question.class === filters.standard
        );
      }

      setFilteredQuestions(tempArray);
    }
  }, [filters]);

  function handleClose() {
    setShowQModal(false);
    // window.location.reload();
    if (deleteAlert) {
      setInterval(() => {
        setdeleteAlert(false);
      }, 2000);
    }
  }

  //// Clear filter
  function clearFilters() {
    // setMyQuestions(myQuestions);
    setShowFilter(false);
  }

  /// Define Question Box Click function
  const onQBoxClick = (item) => {
    setClickedQuestion(item);
    setShowQModal(true);
  };

  // console.log("filtered Questions :", filteredQuestions);
  return (
    <div>
      <QuestionModal
        show={showQModal}
        handleClose={handleClose}
        item={clickedQuestion}
        deleteAlert={deleteAlert}
        setdeleteAlert={setdeleteAlert}
        editQuestionHandler={props.editQuestionHandler}
      />
      <QbankNB
        heading={props.mystate.teacher.teacher_name}
        setQBankHandler={props.setQBankHandler}
      />

      {showSpinner ? <Spinner animation="grow" /> : null}

      <div className="filter-row">
        <div className="filter-row2">
          <div
            className="my-button"
            onClick={() => {
              showFilters ? clearFilters() : activateFilters();
            }}
          >
            FILTER
          </div>
          {showFilters ? (
            <div className="filter-row2">
              <Form.Select
                aria-label="Default select example"
                style={{
                  paddingTop: 0,
                  paddingBottom: 0,
                  marginRight: 10,
                  marginBottom: 5,
                }}
                onChange={(e) =>
                  setFilters({ ...filters, subject: e.target.value })
                }
              >
                <option>All Subjects</option>
                {subjectList.map((item, index) => {
                  return (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  );
                })}
              </Form.Select>
              <Form.Select
                aria-label="Default select example"
                style={{
                  paddingTop: 0,
                  paddingBottom: 0,
                  marginRight: 10,
                  marginBottom: 5,
                }}
                onChange={(e) =>
                  setFilters({ ...filters, year: e.target.value })
                }
              >
                <option>Select Year</option>
                {yearList.map((item, index) => {
                  return (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  );
                })}
              </Form.Select>
              <Form.Select
                aria-label="Default select example"
                style={{
                  paddingTop: 0,
                  paddingBottom: 0,
                  marginRight: 10,
                  marginBottom: 5,
                }}
                onChange={(e) =>
                  setFilters({ ...filters, standard: e.target.value })
                }
              >
                <option>Select Standard</option>
                {standardList.map((item, index) => {
                  return (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  );
                })}
              </Form.Select>
            </div>
          ) : null}
        </div>
      </div>

      <div className="qbank_container">
        {filteredQuestions.map((item, index) => {
          return (
            <div onClick={() => onQBoxClick(item)} key={index}>
              <QuestionCard item={item} />
            </div>
          );
        })}

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
  editQuestionHandler: (data) => {
    dispatch(editQuestion(data));
  },
});
const mstp = (state) => ({
  mystate: state.studentReducer,
});
export default connect(mstp, mdtp)(myQuestionBank);
