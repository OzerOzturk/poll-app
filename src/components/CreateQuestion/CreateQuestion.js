import React, { useState } from "react";
import "./CreateQuestion.css";

const CreateQuestion = () => {
  const [newQuestion, setNewQuestion] = useState([]);

  const handleClick = async () => {
    try {
      const response = await fetch("https://polls.apiblueprint.org/questions", {
        method: "POST",
        body: JSON.stringify({
          question: "Who has won the Champions League the most times? 🏆",
          choices: [
            "Barcelona",
            "Liverpool",
            "Bayern Munich",
            "Real Madrid",
            "AC Milan",
          ],
        }),
        headers: {
          "Content-type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      //console.log("result is: ", JSON.stringify(result, null, 4));

      setNewQuestion(result);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="newquestion__container">
      <button className="newquestion__button" onClick={handleClick}>
        CREATE NEW QUESTION
      </button>
      {newQuestion && (
        <div>
          <h2 className="newquestion__name"> {newQuestion.question}</h2>
          {newQuestion.choices?.map((newQue) => (
            <div className="questiondetail__container" key={newQue.url}>
              <p className="questiondetail__choice">{newQue.choice}</p>
              <p className="questiondetail__votes"> {newQue.votes}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CreateQuestion;
