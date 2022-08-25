import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Question.css";
import axios from "axios";
import { v4 as uuid } from "uuid";

const Question = () => {
  const [questions, setQuestions] = useState([]);

  const unique_id = uuid();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://polls.apiblueprint.org/questions"
        );
        //console.log(response.data);
        setQuestions(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="questions__title">Various Questions</h1>
      {questions &&
        questions.map((question, unique_id) => (
          <div key={unique_id} className="questions__container">
            <Link className="questions__link" to={`${question.url}`}>
              <p className="questions__name">{question.question} </p>
            </Link>
          </div>
        ))}
    </>
  );
};

export default Question;
