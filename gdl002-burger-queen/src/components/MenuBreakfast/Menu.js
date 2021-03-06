import React from "react";
// import Button from "../Button";
import Counter from "../Counter";

const Menu = props => {
  const menuB = props.menuB;
  return (
    <section className="menu">
      <h3>Menú Desayuno</h3>
      <div className="item-container">
        {menuB.map(counter => (
          <div
            key={counter.idx}
            // className="item"
            onClick={() => {
              props.handleIncrement(counter.idx);
              props.getsubtotal(counter.idx, counter.qty * counter.price);
            }}
          >
            <Counter
              name={counter.name}
              qty={counter.qty}
              price={counter.price}
            />
            {/* <Button
              action={() => {
                props.handleIncrement(counter.idx);
                props.getsubtotal(counter.idx, counter.qty * counter.price);
              }}
              imgsrc={require("../../assets/add.png")}
              imgalt="plus icon"
            />
            <Button
              action={() => {
                props.handleDecrement(counter.idx);
                props.getsubtotal(counter.idx, counter.qty * counter.price);
              }}
              imgsrc={require("../../assets/minus.png")}
              imgalt="minus icon"
              // icon={require("../../assets/minus.png")}
            />
            <Button
              action={() => {
                props.reset(counter.idx);
              }}
              imgsrc={require("../../assets/garbage.png")}
              imgalt="garbage icon"
            /> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
