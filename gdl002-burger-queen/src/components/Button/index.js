import React from "react";

const Button = props => {
  return (
    <button
      className={`Button Button-primary ${
        props.extraClassName ? props.extraClassName : ""
      }`}
      onClick={props.action}
    >
      {props.name}

      <img src={props.imgsrc} alt={props.imgalt} />
    </button>
  );
};

export default Button;
