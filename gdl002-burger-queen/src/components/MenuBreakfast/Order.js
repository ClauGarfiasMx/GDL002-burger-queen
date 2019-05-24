import React from "react";
import Button from "../Button";

const Order = props => {
  const menuB = props.menuB;

  return (
    <section className="order">
      <h3>Orden</h3>
      <div className="order-box">
        {menuB
          .filter(value => menuB[value.idx].data.value > 0)
          .map(order => {
            let subtotal = order.data.price * order.data.value;

            return (
              <React.Fragment className="">
                <p>
                  {order.data.value} {order.data.name}: ${subtotal}
                </p>
              </React.Fragment>
            );
          })}
        <div className="total">
          <p className>Total: ${props.sumTotal()}</p>
          <Button action={() => props.getOrder()} name="Enviar" />
        </div>
      </div>
    </section>
  );
};

export default Order;
