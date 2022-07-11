import "./styles.css";
import React, { useState } from "react";

const useState = () => {
  const [item, setItem] = useState(1);
  const ClickBtn = () => setItem((cur) => cur + 1);
  const EnterBtn = () => setItem((cur) => cur - 1);
  return (
    <div className="App">
      <h1 onMouseEnter={EnterBtn}>Hello {item}</h1>
      <button onClick={ClickBtn}></button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};


export default useState;