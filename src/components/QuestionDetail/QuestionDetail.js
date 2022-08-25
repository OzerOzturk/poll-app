import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./QuestionDetail.css";

const QuestionDetail = ({ match }) => {
  const [questionDetail, setQuestionDetail] = useState([]);

  const { questionId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://polls.apiblueprint.org/questions/${questionId}`
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
