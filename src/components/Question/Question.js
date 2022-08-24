import React, { useEffect, useState } from "react";
import "./Question.css";
import axios from "axios";
import { v4 as uuid } from "uuid";
import QuestionDetail from "../QuestionDetail/QuestionDetail";

const Question = () => {
  const [questions, setQuestions] = useState([]);

  const unique_id = uuid();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://polls.apiblueprint.org/questions"
        );
        console.log(response.data);
        setQuestions(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="questions__container">
      <h1 className="questions__title">Various Questions</h1>
      {questions &&
        questions.map((question, unique_id) => (
          <QuestionDetail key={unique_id} name={question.question} />
        ))}
    </main>
  );
};

export default Question;
