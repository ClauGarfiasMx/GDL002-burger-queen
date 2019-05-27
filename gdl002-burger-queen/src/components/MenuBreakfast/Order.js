import React from "react";
import Button from "../Button";

const Order = props => {
  const menuB = props.menuB;

  return (
    <section className="order">
      <h3>Pedido</h3>
      <div className="table-box">
        <label>Mesa No: </label>
        <input onChange={props.onChangeTable} type="text" value={props.table} />
        <label>Notas para el Chef: </label>
        <textarea
          className="notes"
          onChange={props.onChangeNotes}
          type="text"
          value={props.notes}
        />
      </div>
      <div className="order-box">
        {menuB
          .filter(qty => menuB[qty.idx].qty > 0)
          .map(order => {
            let subtotal = order.price * order.qty;

            return (
              <div key={order.idx}>
                <p>
                  <Button
                    action={() => {
                      props.reset(order.idx);
                    }}
                    imgsrc={require("../../assets/garbage.png")}
                  />
                  {order.qty} - {order.name}: ${subtotal}
                </p>{" "}
              </div>
            );
          })}
      </div>
      <div className="total">
        <h4>Total: ${props.sumTotal()}</h4>
        <Button
          action={() => props.getOrder()}
          name="Enviar"
          disabled={!props.table}
        />
      </div>
    </section>
  );
};

export default Order;
