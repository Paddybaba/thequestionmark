import React, { useState, useEffect } from "react";
import TestLibComp from "../../src/components/testLibComp";
import axios from "axios";
import path from "../api/mypaths";
import ReadyTest from "../../src/components/cards/ReadyTest";
import Navbar1 from "../../src/components/navbars/DashboardNavbar";
const testLibrary = () => {
  const [tests, setTests] = useState([]);
  const getTest = async () => {
    const resposne = await axios.post(`${path}/getpublishedtest`);
    const data = await resposne.data;
    setTests(data);
    // console.log(data);
    console.log(data[0]);
  };

  useEffect(() => {
    getTest();
  }, []);

  return (
    <>
      <div className="container-fluid gx-0">
        <Navbar1 heading="Test Library" />
        <div className="row gx-0">
          <div className="col-12 mx-auto">
            <div>
              <h4 className="my-3" style={{ color: "white" }}>
                Recently Uploaded
              </h4>
              <div className="recent-tests">
                {tests.reverse().map((item, index) => {
                  return (
                    <div>
                      <ReadyTest test={item} key={index} />
                    </div>
                  );
                })}
              </div>
              <h4 className="my-3" style={{ color: "white" }}>
                Science
              </h4>
              <div className="recent-tests">
                {tests.map((item, index) => {
                  if (item.subject == "Science") {
                    return (
                      <div>
                        <ReadyTest test={item} key={index} />
                      </div>
                    );
                  }
                })}
              </div>
              <h4 className="my-3" style={{ color: "white" }}>
                Mathematics
              </h4>
              <div className="recent-tests">
                {tests.map((item, index) => {
                  if (item.subject == "Mathematics") {
                    return (
                      <div>
                        <ReadyTest test={item} key={index} />
                      </div>
                    );
                  }
                })}
              </div>
              <h4 className="my-3" style={{ color: "white" }}>
                General Knowledge
              </h4>
              <div className="recent-tests">
                {tests.map((item, index) => {
                  if (item.subject == "GK") {
                    return (
                      <div>
                        <ReadyTest test={item} key={index} />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default testLibrary;
