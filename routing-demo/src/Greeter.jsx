import React from 'react';

function Greeter() {
  // let message = '[default greet message]'
  let [message, setMessage] = React.useState("[default greet message]");
  let [userName, setUserName] = React.useState("");

  const onBtnGreetClick = (evt) => {
    // message = 'greet button clicked'
    setMessage(`Hi ${userName}, Have a nice day!`);
  };

  const onTxtUserNameInput = (evt) => {
    setUserName(evt.target.value);
  };
  return (
    <div>
      <h1>Greeter</h1>
      <hr />
      <label htmlFor="">User Name :</label>
      <input type="text" onInput={onTxtUserNameInput} />
      <span> [ {userName.length} ] </span>
      <button onClick={onBtnGreetClick}>Greet</button>
      <div>{message}</div>
    </div>
  );
}

export default Greeter;