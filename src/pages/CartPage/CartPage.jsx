import React, { useEffect, useState } from "react";
import s from "./CartPage.module.scss";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartList from "../../components/CartList/CartList";
import { useNavigate } from "react-router-dom";
import {
    delete_all_products,
    loadCartFromLocalStorage,
} from "../../store/reducers/CartReducer";
import Button from "../../components/Button/Button";
import Massage from "../../components/Massage/Massage";
// import { sendCartDataToServer } from "../../store/post/postCart";
// import { sendCartDataToServerAndClearCart } from "../../store/Post/cartPost";
// import CartList from '../../components/CartList/CartList';

export default function CartPage() {
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cart);
    const [phoneNumber, setPhoneNumber] = useState("");
    const cartStorage = JSON.parse(localStorage.getItem("cartData"));
    const [showMessage, setShowMessage] = useState(false);
    const navigate = useNavigate();
    // let showMessage = localStorage.getItem("showMessage");

    useEffect(() => {
        if (!cartState.cart.length) {
            dispatch(loadCartFromLocalStorage());
        }
    }, []);

    const roundedTotalPrice = cartStorage?.total_sum.toFixed(2);

    // console.log(cartStorage.cart);

    const sendCartDataToServerAndClearCart = (e) => {
        e.preventDefault();
        // sendCartDataToServer(phoneNumber,cartStorage)
        if (phoneNumber.length > 0) {
            console.log("sendCartDataToServerAndClearCart");
            // вызываю диспатч чтобы очистить корзину для симуляции успешного пост запроса
            dispatch(delete_all_products());
            //
            setShowMessage(true);

            setTimeout(() => {
                setShowMessage(false);
            }, 3000);
        }
        e.target.reset();
    };

    return (
        <div className={s.page}>
            <Massage
                className={
                    showMessage ? "massage_order" : "massage_order hidden"
                }
                name="order sent"
            />
            <h2 className="block__title block__title-margin">Shopping cart</h2>
            <div className={s.cart}>
                <div className={s.cart__order_details}>
                    <h2 className={s.cart__title}>Order details </h2>
                    <div className={s.cart__sum}>
                        <p className={s.cart__sum_title}>Total</p>
                        <p className={s.cart__sum_value}>
                            {roundedTotalPrice} <span>$</span>
                        </p>
                    </div>
                    <form
                        className={s.cart__form}
                        onSubmit={(e) => sendCartDataToServerAndClearCart(e)}
                    >
                        <input
                            type="number"
                            placeholder="Phone number"
                            className={s.cart__form_input}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <Button name="Order" className={"button_order"} />
                    </form>
                </div>
                <div>
                    <div onClick={() => navigate(-1)} className={s.page__back}>
                        <p>Back to the store</p>
                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.49653 1.19763C4.37465 1.19763 4.26567 1.27146 4.21879 1.38396C4.17309 1.49763 4.20004 1.62654 4.28793 1.71208L10.0758 7.49998L4.28793 13.2879C4.20942 13.3629 4.17778 13.4754 4.2059 13.5797C4.23286 13.6851 4.31489 13.7672 4.42036 13.7941C4.52465 13.8222 4.63715 13.7906 4.71215 13.7121L10.7122 7.71208C10.8293 7.5949 10.8293 7.40505 10.7122 7.28787L4.71215 1.28787C4.6559 1.22927 4.57856 1.19763 4.49653 1.19763Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                    {!cartStorage?.cart.length > 0 && (
                        <div className={s.empty_text}>
                            
                            <p>shopping cart is empty</p>
                            <span className={s.empty_text__span}> :(</span>
                        </div>
                    )}
                    <CartList products={cartStorage?.cart || []} />
                </div>
            </div>
        </div>
    );
}
