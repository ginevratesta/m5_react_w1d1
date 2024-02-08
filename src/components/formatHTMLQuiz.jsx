import "./formatHTMLQuiz.css";

const FormatHTMLQuiz = (props) => {
  const {quiz} = props;
  return (
    <div id = {quiz.index} className = "card">
      <div className="question">
        <span>{quiz.index}</span>
        <span>{quiz.question}</span>
      </div>
      <span className="answer">{quiz.answer}</span>
    </div>
  );
};

export default FormatHTMLQuiz;
