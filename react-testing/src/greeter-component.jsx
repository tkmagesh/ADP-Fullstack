import React from "react";

function GreeterComponent(){
    const [msg, setMsg] = React.useState('');
    const onBtnGreetClick = () => {
        setMsg('Hi there!')
    }
    return (
      <div>
        <button onClick={onBtnGreetClick}>Greet</button>
        <div>{msg}</div>
      </div>
    );
}

export default GreeterComponent;