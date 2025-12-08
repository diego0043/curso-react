import { useState } from "react";
import "./ItemCounter.css";

interface Props {
  productName: string;
  quantity?: number;
}

export const ItemCounter = ({ productName, quantity = 1 }: Props) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleClick = () => {
    setItemQuantity(itemQuantity + 1);
  };

  const handleClickLess = () => {
    itemQuantity > 1
      ? setItemQuantity(itemQuantity - 1)
      : console.log("No se puede disminuir");
  };

  return (
    <div className="item-row">
      <span
        className="item-text"
        style={{ color: itemQuantity === 1 ? "red" : "black" }}
      >
        {productName}
      </span>
      <button className="btn-quantity" onClick={handleClickLess}>
        -1
      </button>
      <span className="item-text-quantity">{itemQuantity}</span>
      <button className="btn-quantity" onClick={handleClick}>
        +1
      </button>
    </div>
  );
};
