import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./QuestionDetail.css";

const QuestionDetail = ({ match }) => {
  const [questionDetail, setQuestionDetail] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://polls.apiblueprint.org/?url=${match.params.url}`
        );
        console.log(response);
        setQuestionDetail(response);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="questiondetail__container">
      <p>name : </p>
    </div>
  );
};

export default QuestionDetail;
