import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import logo from "../../assets/logo.svg";
// import CartItem from "../CartItem/CartItem";

import s from "./Header.module.scss";
import Nav from "../Nav/Nav";

export default function Header() {

    return (
        <div className={s.fix_header}>
            <header className={s.header}>
                <div className={s.header__logo}>
                    <NavLink to="/">
                        <img src={logo} alt="logo" />
                    </NavLink>
                    <NavLink to="/categories">
                        <Button name="Catalog" className={"button_green"} />
                    </NavLink>
                </div>
                <div className={s.header_right}>
                    <Nav />

                    {/* <NavLink to="/cart">
                        <CartItem />
                    </NavLink> */}
                </div>
            </header>
        </div>
    );
}
