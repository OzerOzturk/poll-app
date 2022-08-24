import React from "react";
import "./QuestionDetail.css";

const QuestionDetail = ({ name }) => {
  return (
    <div className="questiondetail__container">
      <p>{name}</p>
    </div>
  );
};

export default QuestionDetail;
