import React from "react";
import TestLibComp from "../../src/components/testLibComp";
const testLibrary = () => {
  return (
    <>
      <div className="container-fluid gx-0">
        <div className="row">
          <div className="col-10 mx-auto">
            <h3 className="text-center mt-3 fw-bold text-uppercase">
              Test Library
            </h3>
            <div>
              <h4 className="my-3">Recently Uploaded</h4>
              <div className="recent-tests">
                <TestLibComp
                  subject="Mathematics"
                  author="Anup Padamwar"
                  standard="Class-1"
                  year="2019"
                  published="13 Dec 2021"
                />
                <TestLibComp
                  subject="Science"
                  author="Anup Padamwar"
                  standard="Class-1"
                  year="2021"
                  published="13 Dec 2021"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default testLibrary;
