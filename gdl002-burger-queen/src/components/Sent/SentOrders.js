import React from "react";
import Button from "../Button";

const SentOrders = props => {
  const readyOrders = props.readyOrders;
  return (
    <div className="orders">
      <h3> Órdenes Listas </h3>
      <div>
        {readyOrders.map((element, i) => {
          return (
            <div id={element.orderID} key={i} className="item-kitchen ">
              <span className="ready-msg">¡EL PEDIDO ESTÁ LISTO!</span>
              <br />
              <span className="underline">
                Mesa: {element.orderDetail.table}
              </span>
              {element.orderDetail.items.map((it, i) => {
                return (
                  <div key={i}>
                    <p>
                      <span className="item-order">Cant: </span>
                      <span className="underline">{it.qty}</span>
                      <span className="item-order"> Art: </span>
                      <span className="underline">{it.name}</span>
                    </p>
                  </div>
                );
              })}
              <p>
                <span className="item-order">Notas para Chef:</span>
                <span className="underline">{element.orderDetail.notes}</span>
              </p>
              <Button
                name="Modificar"
                action={() => {
                  props.modifyOrder();
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SentOrders;
