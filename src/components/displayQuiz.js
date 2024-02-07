import React from 'react';
import FormatHTMLQuiz from "./formatHTMLQuiz";
import quizArray from "./q&a";

const DisplayQuiz = () => {
    return (
        quizArray.map((quiz) => (
            <FormatHTMLQuiz quiz={quiz} />
        ))
    );
}

export default DisplayQuiz;
