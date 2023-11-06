import React, { useEffect, useState } from "react";
import s from "./Nav.module.scss";
import { Link, NavLink } from "react-router-dom";
import cartIcon from "../../assets/cartIcon.svg";
import { Turn as Hamburger, Turn } from "hamburger-react";
import {ReactComponent as Cart} from "../../assets/cartIcon.svg"
import { useSelector } from "react-redux";


export default function Nav() {
    const totalCount = useSelector(state=> state.cart.total_count)
    console.log(totalCount);
    const setActiveLink = ({ isActive }) => (isActive ? "item_active" : "item");
    const [isOpen, setOpen] = useState(false);
    const [productCount, setProductCount] = useState(0);


    const toggleAction = () => {
        if (window.innerWidth <= 768) {
            setOpen(!isOpen);
        }
    };

    const navClassName = isOpen
        ? `${s.nav__menu} ${s.nav__activeToggleNav}`
        : s.nav__menu;
    const toggleClassName = isOpen
        ? `${s.burger} ${s.burger__activeBurger}`
        : s.burger;

 

    // товары в корзине:
    const cartStorage = JSON.parse(
        localStorage.getItem("cartData")
    )?.total_count;
    useEffect(() => {
        setProductCount(JSON.parse(localStorage.getItem("cartData"))?.total_count);
    }, [cartStorage]);

    return (
        <>
            <nav className={s.nav}>
                <ul className={navClassName}>
                    <li className={s.nav__li}>
                        <NavLink
                            to="/"
                            className={setActiveLink}
                            onClick={toggleAction}
                        >
                            Main Page
                        </NavLink>
                    </li>
                    <li className={s.nav__li}>
                        <NavLink
                            to="/products"
                            className={setActiveLink}
                            onClick={toggleAction}
                        >
                            All products
                        </NavLink>
                    </li>
                    <li className={s.nav__li}>
                        <NavLink
                            to="/sales"
                            className={setActiveLink}
                            onClick={toggleAction}
                        >
                            All sales
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Link to={"/cart"}>
                <div className={s.cart}>
                    {cartStorage > 0 && (
                        <div className={s.cart__count}>{productCount}</div>
                    )}
                    {/* <img src={cartIcon} alt="cart" /> */}
                    <Cart className={s.cart__icon}/>
                </div>
            </Link>
            <div className={toggleClassName}>
                <Turn toggled={isOpen} toggle={setOpen} />
            </div>
        </>
    );
}
