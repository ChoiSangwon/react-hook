import "./styles.css";
import React, { useState } from "react";

const useInput = (init, val) => {
  const [value, setValue] = useState(init);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof val === "function") {
      //  hook과는 관계 없지만 코드를 이쁘게 만들어줌.
      willUpdate = val(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};
export default useInput;
