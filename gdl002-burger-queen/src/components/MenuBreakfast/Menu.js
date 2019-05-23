import React from "react";
import Button from "../Button";
import Counter from "../Counter";

const Menu = props => {
  const menuB = props.menuB;

  return (
    <section>
      <h2>Menú Desayuno</h2>
      <label>Mesa Núm:</label>
      <input
        name="table"
        onChange={props.onChange}
        type="text"
        placeholder="# Mesa"
      />
      {menuB.map(counter => (
        <div key={counter.idx}>
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
