import React from "react";
import router from "next/router";
import { FaHome } from "react-icons/fa";
import TeacherDBNavbar from "../../src/components/navbars/TeacherDBNavbar";
import { connect } from "react-redux";
const teacherOptions = (props) => {
  const teacher = props.teacher;
  // console.log(teacher);
  return (
    <>
      <div className="container-fluid gx-0">
        <TeacherDBNavbar heading={teacher.teacher_name} />

        <div className="row gx-0">
          <div className="col-8 mx-auto" style={{ marginTop: 100 }}>
            <div className="row mx-auto gx-0">
              <div className="col-sm-6 ">
                <div
                  className="box newQuestion-box"
                  onClick={() => router.push("/question/addQuestion2")}
                >
                  Add new Question
                </div>
              </div>
              <div className="col-sm-6 ">
                <div className="box question-bank-box" onClick={()=>router.push("/question/questionBank")}>My Question Bank </div>
              </div>
            </div>
            <div className="row mx-auto gx-0">
              <div className="col-sm-6 ">
                <div className="box mystudents-box">My Students</div>
              </div>
              <div className="col-sm-6 ">
                <div className="box extra-box">One more Tab</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// const mdtp = (dispatch) => ({
//   userLoginHandler: (data) => dispatch(userLogin(data)),
// });
const mstp = (state) => ({
  teacher: state.studentReducer.teacher,
});
export default connect(mstp)(teacherOptions);
