import React from "react";
import router from "next/router";
import { connect } from "react-redux";
import DashboardNavbar from "../../src/components/navbars/DashboardNavbar";
import MyNavbar from "../../src/components/navbars/MyNavbar";
const studentOptions = (props) => {
  // console.log(props);
  const student = props.student.user.student_name;
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
                <div className="box mystudents-box">My Test</div>
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
const mdtp = (dispatch) => ({
  // userLoginHandler: (data) => dispatch(userLogin(data)),
});
const mstp = (state) => ({
  student: state.studentReducer,
});
export default connect(mstp, mdtp)(studentOptions);
// export default studentOptions;
