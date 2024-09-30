import { useState } from "react"
import './App.css'


const questions=[
  {
    question: "Which software development model involves creating a basic system quickly and then incrementally adding features?",
    options: ["Waterfall model", "Agile model", "Spiral model", "Prototyping model"],
    correctAnswer: "Agile model",
  },
  {
    question: "Which software project management method focuses on breaking down tasks into smaller, manageable units?",
    options: ["Waterfall model", "Scrum", "RAD model", "Six Sigma "],
    correctAnswer: "Scrum",
  },
  {
    question: "In software engineering, what is refactoring?",
    options: ["Rewriting code entirely", "Removing unnecessary code", "Restructuring code without changing its behavior", "Improving code readability"],
    correctAnswer: "Restructuring code without changing its behavior",
  },
  {
    question: "Which software design principle states that software entities should be open for extension but closed for modification?",
    options: ["Liskov Substitution Principle (LSP)", "Single Responsibility Principle (SRP)", "Open/Closed Principle (OCP)", "Dependency Inversion Principle (DIP)"],
    correctAnswer: "Open/Closed Principle (OCP)",
  },
  {
    question: "Which testing technique focuses on assessing individual units or components of software in isolation?",
    options: ["Integration testing", "System testing", "Unit testing", "Acceptance testing"],
    correctAnswer: "Unit testing",
  },
];

function App() {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showText, setShowText] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleReset = () => {
    setScore(0);
    setShowScore(false);
    setCurrentQuestion(0);
    setShowText(false);
  };


  const handleAnswerOptionClick = (selectedAnswer)=>{
    selectedAnswer === questions[currentQuestion].correctAnswer 
    && setScore(score + 1)

    const nextQuestion = currentQuestion + 1;

    if(nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion)
    }else{
      setShowScore(true);
      setShowScore(true);
    }
  }

const displayResponse = (score) => {
    if(score === questions.length){
      return "Perfect Score";
    }else if(score >= questions.length / 2){
      return "Good job! You almost had a perfect score!"
    }else{
      return "Keep practicing!"
    }
  };

  return (
    <section className="App-header">
      <header className="App-header">
        <h1>Take this Quiz!</h1>
      </header>
    <div className="App">
      {showScore ? (<div className='App-header'>You scored {score} out of {questions.length}
        {showText && (
          <h4>{displayResponse(score)}</h4>
        )}
      </div>
      ): (
        <>
        </>
      )
      }
      <div className="question-section">
      <div className="question-count">
      <span>Question {currentQuestion + 1}</span> /
      {questions.length}
      <div className="resetButton">
      <button onClick={handleReset}>Reset</button>
    </div>
      </div>
      <div className="question-text">{questions[currentQuestion].question}</div>
      </div>
      <div className="answer-section">{questions[currentQuestion].options.map((option)=>(<button 
      className='answer-button' key={option} onClick={()=> handleAnswerOptionClick(option)}>
        {option}
      </button>))}</div>
    </div>
    </section>
  );
}

export default App;
