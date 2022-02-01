import React, { useState } from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState(false);

  const handleClick = () => setCart(cart => !cart)

  return (
    <li className={cart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>Add to Cart</button>
    </li>
  );
}

export default Item;
