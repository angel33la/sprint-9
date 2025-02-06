import { useTextInput } from "hooks/useTextInput";
import React, { useState } from "react";

const Form = () => {
  const firstName = useTextInput("firstName");
  const lastName = useTextInput("lastName");
  const favColour = useTextInput("favColour");

  const [submittedValue, setSubmittedValue] = useState("");
  const handleSubmit = () => {
    setSubmittedValue(
      `Thanks for pressing the button, ${firstName.value} ${lastName.value}!`
    );
  };

  return (
    <div>
      <input type="text" {...firstName} />
      <input type="text" {...lastName} />
      <input type="text" {...favColour} />
      <button onClick={handleSubmit}>Submit</button>
      <div>{submittedValue}</div>
    </div>
  );
};

export default Form;
