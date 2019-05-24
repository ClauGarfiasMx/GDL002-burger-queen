import React from "react";
import Button from "../Button";
import Counter from "../Counter";

const Menu = props => {
  const menuB = props.menuB;

  return (
    <section className="menu">
      <h3>Menú Desayuno</h3>
      {/* <label>Mesa Núm:</label>
      <input
        name="table"
        onChange={props.onChange}
        type="text"
        placeholder="# Mesa"
      /> */}
      {menuB.map(counter => (
        <div key={counter.idx} className="item">
          <Counter
            name={counter.data.name}
            value={counter.data.value}
            price={counter.data.price}
          />
          <Button
            action={() => {
              props.handleIncrement(counter.idx);
              props.getsubtotal(
                counter.idx,
                counter.data.value * counter.data.price
              );
            }}
            name="+"
          />
          <Button
            action={() => {
              props.handleDecrement(counter.idx);
              props.getsubtotal(
                counter.idx,
                counter.data.value * counter.data.price
              );
            }}
            name="-"
          />
          <Button
            action={() => {
              props.reset(counter.idx);
            }}
            name="borrar"
          />
        </div>
      ))}
    </section>
  );
};

export default Menu;
