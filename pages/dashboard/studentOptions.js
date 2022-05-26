import React, { useEffect, useState } from "react";
import router from "next/router";
import { connect } from "react-redux";
import { selectOptions, setQuestions } from "../../redux/actions";
import DashboardNavbar from "../../src/components/navbars/DashboardNavbar";
import MyNavbar from "../../src/components/navbars/MyNavbar";
import axios from "axios";
import path from "../api/mypaths";
const studentOptions = (props) => {
  // console.log(props);
  const student = props.student.user.student_name;
  const [savedTest, setSavedTest] = useState();
  useEffect(async () => {
    const resposne = await axios.post(`${path}/retrieveSavedTest`, {
      student_id: props.student.user.student_id,
    });
    setSavedTest(resposne.data);
  }, []);
  console.log(student);
  return (
    <>
      <div className="container-fluid gx-0">
        <div className="row gx-0">
          <DashboardNavbar heading={`${student}'s Dashboard`} />
          {/* <MyNavbar heading={student} /> */}
        </div>
        <div className="row gx-0">
          <div className="col-10 mx-auto" style={{ marginTop: 100 }}>
            <div className="row mx-auto gx-0">
              <div className="col-6 ">
                <div
                  className="box"
                  onClick={() => router.push("/test/selectTest")}
                >
                  <img
                    src="/selecttest.png"
                    style={{ width: 140, height: 140 }}
                  />
                </div>
              </div>
              <div className="col-6 ">
                <div
                  className="box"
                  onClick={() => router.push("/test/testLibrary")}
                >
                  <img src="/library.png" style={{ width: 140, height: 140 }} />
                </div>
              </div>
            </div>
            <div className="row mx-auto gx-0">
              <div className="col-6 ">
                <div
                  className="box mystudents-box"
                  onClick={() => openSavedTest(savedTest, props)}
                >
                  Last Saved Test
                </div>
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
const openSavedTest = async (savedTest, props) => {
  console.log("lets go to last saved test");

  try {
    const options = savedTest.options;

    props.selectOptionsHandler(options);
    // const questions = await requestQuestions(options);
    const questions = savedTest.questions;
    if (questions.length > 0) {
      props.setQuestionsHandler(questions);
      router.replace("/test/test_page2");
      localStorage.setItem("score", JSON.stringify(savedTest.progress));
    } else {
      // setShow(true);
      // setSpinner(false);
      alert("Test not available");
    }
  } catch (err) {
    console.log(err.message);
  }
};
const requestQuestions = async (options) => {
  const response = await axios.post(`${path}/getquest`, options);
  const data = await response.data;
  return data;
};

const mdtp = (dispatch) => ({
  selectOptionsHandler: (options) => dispatch(selectOptions(options)),
  setQuestionsHandler: (questions) => dispatch(setQuestions(questions)),
});
const mstp = (state) => ({
  student: state.studentReducer,
});
export default connect(mstp, mdtp)(studentOptions);
// export default studentOptions;
