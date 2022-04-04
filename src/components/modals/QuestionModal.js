import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { getDisplayName } from "next/dist/shared/lib/utils";
import router from "next/router";
import { connect } from "react-redux";
import { editQuestion } from "../../../redux/actions";
const QuestionModal = ({ show, handleClose, item, editQuestionHandler }) => {
  // console.log("item", item);
  // console.log("satte", editQuestionHandler);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        {/* <Modal.Title>{item.subject}</Modal.Title>
        <p style={{ fontSize: "0.8em" }}>
          {item.year}, {item.class}
        </p> */}
        <div style={{ lineHeight: "8px" }}>
          <h3>{item.subject}</h3>
          <p style={{ fontSize: "0.7em", fontWeight: "bolder" }}>
            {item.year}, {item.class}
          </p>
        </div>
      </Modal.Header>

      <Modal.Body>
        <div className="qmodal-body">
          <div className="qmodal-image-question">
            {item.question.quest.image != "" ? (
              <img
                src={item.question.quest.image}
                style={{
                  height: "150px",
                  width: "50%",
                  borderRadius: 5,
                  marginBottom: 10,
                }}
              ></img>
            ) : null}

            <p
              style={{
                margin: 10,
                fontSize: "0.9em",
                fontWeight: "bolder",
                fontStyle: "italic",
              }}
            >
              Q. {item.question.quest.que}
            </p>
          </div>

          <div>
            {item.question.options.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{ marginLeft: 10, display: "flex", lineHeight: "8px" }}
                >
                  <p style={{ fontSize: "0.8em", fontWeight: "bolder" }}>
                    {index + 1}.
                  </p>
                  {item.image != "" ? (
                    <img
                      src={item.image}
                      style={{ width: 80, height: 65 }}
                    ></img>
                  ) : null}
                  <p
                    style={{
                      fontSize: "0.8em",
                      fontWeight: "bolder",
                      marginLeft: 10,
                    }}
                  >
                    {item.option}
                  </p>
                </div>
              );
            })}
          </div>
          <p style={{ color: "limegreen" }}>
            Correct answer : {item.question.correct_ans}
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => onEditQuestion(editQuestionHandler, item)}
        >
          Edit
        </Button>
        <Button variant="danger" onClick={handleClose}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

function onEditQuestion(editQuestionFunction, item) {
  router.push("/question/editQuestion");

  editQuestionFunction(item);
}
const mdtp = (dispatch) => ({
  editQuestionHandler: (data) => dispatch(editQuestion(data)),
});
const mstp = (state) => ({
  state: state.studentReducer,
});
export default connect(mstp, mdtp)(QuestionModal);
// export default QuestionModal;
