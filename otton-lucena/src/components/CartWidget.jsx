import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { getItemCount } = useContext(CartContext);

  return (
    <>
      <Link to="/cart" className="link m-3">
        <i className="bi bi-cart2 text-white fs-2"></i>
        <sup>
          <small className="text-black fs-5 fw-bold">{getItemCount()}</small>
        </sup>
      </Link>
    </>
  );
};

export default CartWidget;
