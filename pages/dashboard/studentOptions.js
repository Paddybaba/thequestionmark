import React from "react";
import router from "next/router";
import { connect } from "react-redux";
import DashboardNavbar from "../../src/components/navbars/DashboardNavbar";
// import { FaHome } from "react-icons/fa";
const studentOptions = (props) => {
  // console.log(props);
  const student = props.student.user.student_name;
  console.log(student);
  return (
    <>
      <div className="container-fluid gx-0">
        <div className="row gx-0">
          {/* <h2 className="col-9 tc mx-auto mt-3 fw-bold">
            {student}'s Dashboard
          </h2> */}
          <DashboardNavbar heading={`${student}'s Dashboard`} />
        </div>
        <div className="row gx-0">
          <div className="col-8 mx-auto" style={{ marginTop: 100 }}>
            <div className="row mx-auto gx-0">
              <div className="col-sm-6 ">
                <div
                  className="box newQuestion-box"
                  onClick={() => router.push("/test/selectTest")}
                >
                  Select Test
                </div>
              </div>
              <div className="col-sm-6 ">
                <div
                  className="box question-bank-box"
                  onClick={() => router.push("/test/testLibrary")}
                >
                  Test Library
                </div>
              </div>
            </div>
            <div className="row mx-auto gx-0">
              <div className="col-sm-6 ">
                <div className="box mystudents-box">My Test</div>
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
const mdtp = (dispatch) => ({
  // userLoginHandler: (data) => dispatch(userLogin(data)),
});
const mstp = (state) => ({
  student: state.studentReducer,
});
export default connect(mstp, mdtp)(studentOptions);
// export default studentOptions;
