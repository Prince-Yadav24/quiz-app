import "./App.css";
import Footer from "./components/Footer";
import FrontPage from "./components/FrontPage";
import Header from "./components/Header";

function App() {
  const questions = [
    {
      id: 1,
      qus: "1. What is React.js?",
      firstOption: "Open-source JavaScript back-end library",
      secondOption: "JavaScript front-end library to create a database",
      thirdOption: "Free and open-source JavaScript front-end library",
      fourthOption: "None of the mentioned",
    },
    {
      id: 2,
      qus: "2. React.js is written in which of the following language?",
      firstOption: "Java",
      secondOption: "C",
      thirdOption: "C++",
      fourthOption: "JavaScript",
    },
    {
      id: 3,
      qus: "3. Which of the following is correct about prop in react?",
      firstOption: "Can be changed inside another componenta",
      secondOption: "Can be changed inside the component",
      thirdOption: "Cannot be changed in the component",
      fourthOption: "All of the mentioned",
    },
  ];
  return (
    <div>
      <Header counter={questions.length} />
      {questions.map((question) => {
        return <FrontPage key={question.id} question={question} />;
      })}

      <Footer />
    </div>
  );
}

export default App;
