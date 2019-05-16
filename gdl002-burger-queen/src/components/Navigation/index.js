import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ORDER}>Crear Orden</Link>
      </li>
      <li>
        <Link to={ROUTES.KITCHEN}>Pedidos a Cocina</Link>
      </li>
      <li>
        <Link to={ROUTES.SENT}>Enviado</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
