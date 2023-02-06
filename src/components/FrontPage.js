import React from "react";

const FrontPage = (props) => {
  const question = props.question;
  return (
    <div>
      <p>{question.qus}</p>

      <form>

      <input type="radio" id={question.firstOption} value={question.firstOption} name="option" />
      <label htmlFor={question.firstOption}>{question.firstOption}</label>
      <br />

      <input type="radio" id={question.secondOption} value={question.secondOption} name="option" />
      <label htmlFor={question.secondOption}>{question.secondOption}</label>
      <br />
      
      <input type="radio" id={question.thirdOption} value={question.thirdOption} name="option" />
      <label htmlFor={question.thirdOption}>{question.thirdOption}</label>
      <br />
      
      <input type="radio" id={question.fourthOption} value={question.fourthOption} name="option"/>
      <label htmlFor={question.fourthOption}>{question.fourthOption}</label>
      <hr />
      </form>
    </div>
  );
};

export default FrontPage;
