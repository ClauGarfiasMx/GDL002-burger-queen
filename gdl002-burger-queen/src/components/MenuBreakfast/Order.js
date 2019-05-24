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
              <div key={order.idx}>
                <p>
                  {order.data.value} - {order.data.name}: ${subtotal}
                </p>
              </div>
            );
          })}
        <p>Total: ${props.sumTotal()}</p>
        <Button action={() => props.getOrder()} name="Enviar" />
      </div>
    </section>
  );
};

export default Order;
