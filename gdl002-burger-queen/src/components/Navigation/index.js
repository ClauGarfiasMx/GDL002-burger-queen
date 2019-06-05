import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Navigation = () => (
  <nav>
    <ul className="flex-row">
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ORDER}>Crear Orden</Link>
      </li>
      <li>
        <Link to={ROUTES.KITCHEN}>Órdenes en Cocina</Link>
      </li>
      <li>
        <Link to={ROUTES.SENT}>Órdenes Listas</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
