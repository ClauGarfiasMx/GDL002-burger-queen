import React from "react";

const Counter = props => {
  return (
    <div className="item">
      <div>
        {props.name} <p className="price">${props.price}</p>
      </div>
      <p className="cant">Cant: {props.qty}</p>
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
