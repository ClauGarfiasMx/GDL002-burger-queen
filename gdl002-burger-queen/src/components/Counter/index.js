import React from "react";
import Button from "../Button";

const Counter = props => {
  return (
    <div className="item">
      <p>
        {props.name} ${props.price}
      </p>
      <p className="cant">
        Cant: {props.value}
        {/* Sub-Tot: ${props.value * props.price} */}
      </p>
      <div>
        <Button
          action={() => {
            props.handleIncrement(props.idx);
            props.getsubtotal(props.idx, props.value * props.price);
          }}
          name="más"
        />
        <Button
          action={() => {
            props.handleDecrement(props.idx);
            props.getsubtotal(props.idx, props.value * props.price);
          }}
          name="menos"
        />
        <Button
          action={() => {
            props.reset(props.idx);
          }}
          name="borrar"
        />
      </div>
    </div>
  );
};

export default Counter;
