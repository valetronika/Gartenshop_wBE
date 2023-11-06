import React, { useEffect, useState } from "react";
import s from "./ProductIem.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import crest from "../../assets/x.svg";
import { useDispatch, useSelector } from "react-redux";
import {
    add_to_cart,
    decrement_count,
    delete_from_cart,
    increment_count,
} from "../../store/reducers/CartReducer";
import Massage from "../Massage/Massage";

export default function ProductIem(props) {
    /**
     * product- объект с:(categoryId, createdAt, description, discont_price, id, image, isShowByPrice, isShowBySale, price, title, updatedAt)
     * type - для  страницы товара SingleProductItem, для карточки товара в списке  itemOverView или для корзины  CartItem
     * openProduct - если она передается то при клике открывает страницу товар
     * addToCart - функция для добавления в корзину
     */
    let { product, type, id, openProduct, addToCart } = props;
    const dispatch = useDispatch();

    //логика кнопки при наведении мыши на продукт
    const [isHovered, setIsHovered] = useState(false);
    const [buttonClassName, setButtonClassName] = useState(
        '"add_to_cart_unvis"'
    );
    const [showMessage, setShowMessage] = useState(false);
    localStorage.setItem("showMessage", showMessage);

    useEffect(() => {
        setButtonClassName(isHovered ? "add_to_cart" : "add_to_cart_unvis");
    }, [isHovered]);
    if (!product) {
        return null;
    }
    const handleMouseEnter = () => {
        type === "itemOverView" && setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleAddToCartClick = (e) => {
        dispatch(add_to_cart(product));
        console.log("handleAddToCartClick работает");
        setShowMessage(true);

        setTimeout(() => {
            setShowMessage(false);
        }, 2000);
        e.stopPropagation();
    };
    // ----------

    let discount = product
        ? product.discont_price &&
          Math.round(
              ((product.price - product.discont_price) / product.price) * 100
          )
        : 0;

    const stylePrice = {
        justifyContent: product.discont_price ? "space-between" : "start",
    };

    // кнопки для корзины
    const handleDelete = () => {
        dispatch(delete_from_cart(product.id));
    };
    const handleDecrement = () => {
        console.log("handleDecrement");
        dispatch(decrement_count(product.id));
    };
    const handleIncrement = () => {
        console.log("handleIncrement");
        dispatch(increment_count(product.id));
    };
    return (
        <div
            className={s[type]}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={openProduct ?? openProduct}
        >
            <Massage
                className={showMessage ? "massage" : "massage hidden"}
                name="added to cart"
            />
            {type != "SingleProductItem" && (
                <Button
                    name="Add to cart"
                    className={buttonClassName}
                    clickHandle={handleAddToCartClick}
                />
                // </div>
            )}
            <div className={s.image_container}>
                {type === "SingleProductItem" && (
                    <h2 className={s.title}>{product.title}</h2>
                )}

                <Link to={`/products/${product.id}`}>
                    <img
                        src={`https://telran-project-backend-y5gf.onrender.com/${product.image}`}
                        alt="product"
                        className={s.image}
                    />
                </Link>
            </div>
            {/* рендер блока  price */}
            <div className={s.product_info}>
                <div style={stylePrice} className={s.stylePrice}>
                    <h2 className={s.stylePrice__h2}>
                        {product.discont_price || product.price}
                        <span>$</span>
                    </h2>
                    {product.discont_price && (
                        <p className={s.old__price}>{product.price}$</p>
                    )}
                    {type != "CartItem" && product.discont_price && (
                        <p className={s.discount}>{discount}%</p>
                    )}
                </div>
                {/* для страницы товара */}
                <div className={type === "CartItem" ? s.CartItem__info : ""}>
                    {type !== "SingleProductItem" && (
                        <p className={s.title}>{product.title}</p>
                    )}
                    {/* //2 button for single */}
                    {type == "SingleProductItem" && (
                        <div className={s.button_container}>
                            <Button
                                className={"to_cart"}
                                name="To cart"
                                clickHandle={handleAddToCartClick}
                            />
                            <div className={s.product_info__description}>
                                <h3 className={s.product_info__title}>
                                    Description
                                </h3>
                                <p className={s.product_info__text}>
                                    {product.description}
                                </p>
                            </div>
                        </div>
                    )}
                    {/* //1 counter для корзины */}
                    {type === "CartItem" && (
                        <>
                            <div className={s.count}>
                                <button
                                    onClick={handleDecrement}
                                    className={s.count__button}
                                >
                                    <svg
                                        width="18"
                                        height="2"
                                        viewBox="0 0 18 2"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            width="18"
                                            height="2"
                                            fill="black"
                                        />
                                    </svg>
                                </button>
                                <p className={s.count__value}>
                                    {product.count}
                                </p>
                                <button
                                    onClick={handleIncrement}
                                    className={s.count__button}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 18 18"
                                        fill="none"
                                    >
                                        <rect
                                            y="8"
                                            width="18"
                                            height="2"
                                            fill="black"
                                        />
                                        <rect
                                            x="8"
                                            y="18"
                                            width="18"
                                            height="2"
                                            transform="rotate(-90 8 18)"
                                            fill="black"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div className={s.delete} onClick={handleDelete}>
                                <img src={crest} alt="crest" />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
