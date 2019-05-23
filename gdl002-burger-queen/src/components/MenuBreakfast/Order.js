import React from "react";
import Button from "../Button";

const Order = props => {
  const menuB = props.menuB;

  return (
    <section>
      <h2>Orden</h2>

      {menuB
        .filter(value => menuB[value.idx].data.value > 0)
        .map(order => {
          let subtotal = order.data.price * order.data.value;

          return (
            <div key={order.idx}>
              <p>
                {order.data.name}: {order.data.value}
              </p>
              <p id="subtotalP">Sub-Tot: ${subtotal}</p>
            </div>
          );
        })}
      <p>Total: ${props.sumTotal()}</p>
      <Button action={() => props.getOrder()} name="Enviar" />
    </section>
  );
};

export default Order;
