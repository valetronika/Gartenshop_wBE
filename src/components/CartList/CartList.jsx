import React from "react";
import s from "./CartList.module.scss";
import { useSelector } from "react-redux";
import ProductIem from "../ProductIem/ProductIem";

export default function CartList() {
    const cartState = useSelector((state) => state.cart);
    const cartStorage = JSON.parse(localStorage.getItem("cartData"));
    // console.log(cartState);
    return (
        <div className={s.cart__list}>
            {cartStorage?.cart.map((el) => (
                <ProductIem key={el.id} type="CartItem" product={el} />
            ))}
        </div>
    );
}
