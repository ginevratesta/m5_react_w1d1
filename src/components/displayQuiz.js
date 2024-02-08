import React from "react";
import FormatHTMLQuiz from "./formatHTMLQuiz";
import quizArray from "./quizArray";

const DisplayQuiz = () => {
  return quizArray.map((quiz) => <FormatHTMLQuiz key={quiz.index} quiz={quiz} />);
};

export default DisplayQuiz;
