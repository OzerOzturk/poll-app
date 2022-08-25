import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./QuestionDetail.css";

const QuestionDetail = () => {
  const [questionDetail, setQuestionDetail] = useState([]);

  const { questionId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://polls.apiblueprint.org/questions/${questionId}`
        );
        //console.log(response.data.choices);
        setQuestionDetail(response.data.choices);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {questionDetail.map((question) => (
        <div className="questiondetail__container" key={question.url}>
          <p className="questiondetail__choice">{question.choice}</p>
          <p className="questiondetail__votes"> {question.votes}</p>
        </div>
      ))}
    </>
  );
};

export default QuestionDetail;
