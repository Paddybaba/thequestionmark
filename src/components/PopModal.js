import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import router, { useRouter } from "next/router";

function PopModal(props) {
  console.log(props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ backgroundColor: "#A16AE8" }}>
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ color: "white" }}
        >
          Scorecard
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#A16AE8" }}>
        <div className="score-text">
          <h4>Total Questions : {props.progress.total}</h4>
          <h4>Correct Answer : {props.progress.correct.length}</h4>
          <h4>Incorrect Answers : {props.progress.incorrect.length}</h4>
          <h4 style={{ fontWeight: "bolder" }}>
            Marks Obtained :{" "}
            {Math.round(
              (props.progress.correct.length / props.progress.total) * 100
            )}
            %
          </h4>
        </div>
      </Modal.Body>
      <Modal.Footer style={{ backgroundColor: "#A16AE8" }}>
        {/* <Button
          onClick={() => router.replace("/dashboard/studentOptions")}
          style={{ alignSelf: "left" }}
          className="pop-button"
        >
          Finish Test
        </Button> */}
        <button
          className=" previous-next finish-button"
          onClick={() => router.replace("/dashboard/studentOptions")}
          style={{ alignSelf: "left" }}
        >
          Finish Test
        </button>
        <button className=" previous-next" onClick={props.onHide}>
          Close
        </button>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        <button
          className=" previous-next"
          onClick={() => router.replace("/test/result_page")}
        >
          Check Result
        </button>
        {/* <Button onClick={() => router.replace("/test/result_page")}>
          Check Result
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
}

export default PopModal;
