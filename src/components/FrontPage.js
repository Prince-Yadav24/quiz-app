import React from "react";

const FrontPage = (props) => {
  const question = props.question;
  return (
    <div>
      <p>{question.qus}</p>

      <input type="radio" id="firstOption" value={question.firstOption} />
      <label>{question.firstOption}</label>
      <br />

      <input type="radio" id="secondOption" value={question.secondOption} />
      <label>{question.secondOption}</label>
      <br />

      <input type="radio" id="thirdOption" value={question.thirdOption} />
      <label>{question.thirdOption}</label>
      <br />

      <input type="radio" id="forthOption" value={question.fourthOption} />
      <label>{question.fourthOption}</label>
      <hr />
    </div>
  );
};

export default FrontPage;
