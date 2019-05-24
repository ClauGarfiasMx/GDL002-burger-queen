import React from "react";
import Button from "../Button";

const Counter = props => {
  return (
    <div>
      <p>
        {props.name} ${props.price}
      </p>
      <p className="cant">Cant: {props.value}</p>
      <div>
        {/* <Button
          action={() => {
            props.getsubtotal(props.idx, props.value * props.price);
            props.handleIncrement(props.idx);
          }}
          name="más"
        />
        <Button
          action={() => {
            props.getsubtotal(props.idx, props.value * props.price);
            props.handleDecrement(props.idx);
          }}
          name="menos"
        />
        <Button
          action={() => {
            props.reset(props.idx);
          }}
          name="borrar"
        /> */}
      </div>
    </div>
  );
};

export default Counter;
