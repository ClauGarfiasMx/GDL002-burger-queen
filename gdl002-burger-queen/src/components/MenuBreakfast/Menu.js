import React from "react";
import Counter from "../Counter";

const Menu = props => {
  const menuB = props.menuB;

  return (
    <section className="menu">
      <h3>Menú Desayuno</h3>
      <div className="flex-row-menu">
        {menuB.map(counter => (
          <React.Fragment key={counter.idx}>
            <Counter
              idx={counter.idx}
              name={counter.data.name}
              value={counter.data.value}
              price={counter.data.price}
              handleIncrement={props.handleIncrement}
              handleDecrement={props.handleDecrement}
              getsubtotal={props.getsubtotal}
              reset={props.reset}
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Menu;
