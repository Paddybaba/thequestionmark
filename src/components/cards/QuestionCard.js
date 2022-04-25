import React from "react";

const QuestionCard = ({ item }) => {
  const { subject, year, question } = item;
  const standard = item.class;
  var image = item.question.quest.image;
  //   console.log(props);
  return (
    <div className="qcard_rect">
      {image != "" ? (
        <img
          src={image}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            minWidth: "100%",
            height: "100%",
            opacity: 0.4,
          }}
        />
      ) : null}
      <div>
        <p className="subject">{subject}</p>
        <p className="year">
          {year}, {standard}
        </p>
        <p className="standard"></p>
        <p className="question_text">{question.quest.que}</p>
      </div>
    </div>
  );
};

export default QuestionCard;
