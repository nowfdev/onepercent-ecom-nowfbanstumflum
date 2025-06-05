import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartPrice } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div className="text-2xl ">
        <Title text1={"Cart"} text2={"Total"} />
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {getCartPrice()}.00 {currency}
          </p>
        </div>
        <hr />
        <div className="flex justify-between ">
          <p>Shipping fee</p>
          <p>
            {delivery_fee}.00 {currency}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {getCartPrice() === 0 ? 0 : getCartPrice() + delivery_fee}.00{" "}
            {currency}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
