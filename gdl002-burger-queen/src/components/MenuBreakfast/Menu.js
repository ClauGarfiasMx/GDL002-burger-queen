import React from "react";
import Button from "../Button";
import Counter from "../Counter";

const Menu = props => {
  const menuB = props.menuB;

  return (
    <section className="menu">
      <h3>Menú Desayuno</h3>
      <div className="item-div">
        {menuB.map(counter => (
          <div key={counter.idx} className="item">
            <Counter
              name={counter.name}
              qty={counter.qty}
              price={counter.price}
            />
            <Button
              action={() => {
                props.handleIncrement(counter.idx);
                props.getsubtotal(counter.idx, counter.qty * counter.price);
              }}
              name="+"
            />
            <Button
              action={() => {
                props.handleDecrement(counter.idx);
                props.getsubtotal(counter.idx, counter.qty * counter.price);
              }}
              name="-"
            />
            <Button
              action={() => {
                props.reset(counter.idx);
              }}
              name="x"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
