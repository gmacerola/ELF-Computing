import React from "react";
import Cart from "../Cart/Cart";
import Total from "../Total/Total";

export default function MainSummary(props) {
  const { currencyFormat } = props;
  return (
    <div>
      <Cart currencyFormat={currencyFormat} {...props} />
      <Total currencyFormat={currencyFormat} {...props} />
    </div>
  );
}
