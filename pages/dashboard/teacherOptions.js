import React, { useEffect } from "react";
import router from "next/router";
import { FaHome } from "react-icons/fa";
import TeacherDBNavbar from "../../src/components/navbars/TeacherDBNavbar";
import { connect } from "react-redux";
import axios from "axios";
import path from "../api/mypaths";
import { setQBank } from "../../redux/actions";
const teacherOptions = (props) => {
  const teacher = props.teacher;
  // Get all questions (QuestionBank) for this teacher
  useEffect(async () => {
    const questionBank = await getMyQuestions(teacher.teacher_id);
    props.setQBankHandler(questionBank);
  }, []);
  // console.log(teacher);
  return (
    <>
      <div className="container-fluid gx-0">
        <TeacherDBNavbar heading={teacher.teacher_name} />

        <div className="row gx-0">
          <div className="col-10 mx-auto" style={{ marginTop: 20 }}>
            <div className="row mx-auto gx-0">
              <div className="col-6 ">
                <div
                  className="box newQuestion-box"
                  onClick={() => router.push("/question/addQuestion2")}
                >
                  <img className="dbimages" src="/addQuestion.png" />
                </div>
              </div>
              <div className="col-6 ">
                <div
                  className="box"
                  onClick={() => router.push("/question/questionBank")}
                >
                  <img className="dbimages" src="/queBank.png" />
                </div>
              </div>
            </div>
            <div className="row mx-auto gx-0">
              <div className="col-6 ">
                <div className="box mystudents-box">My Students</div>
              </div>
              <div className="col-6 ">
                <div className="box extra-box">One more Tab</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
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
  teacher: state.studentReducer.teacher,
});
export default connect(mstp, mdtp)(teacherOptions);
