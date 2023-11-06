import s from "./Offer.module.scss";
import React, { useState } from "react";
import gnomImg from "../../assets/offerGnom.svg";
import Massage from "../Massage/Massage";

export default function Offer() {
    const [phone, setPhone] = useState("");
    const [showMessage, setShowMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const phone = e.target.elements.namedItem("phone").value;

        fetch("/sale/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                phone,
            }),
        }).then((response) => response.json());

        if (phone) {
            setShowMessage(true);

            setTimeout(() => {
                setShowMessage(false);
            }, 2000);
        }

        e.target.reset();
    };
    return (
        <div className={s.offer}>
            <Massage
                name="request sent"
                className={showMessage ? "massage" : "massage hidden"}
            />
            <img src={gnomImg} alt="gnom" />
            <div>
                <h2>5% off </h2>
                <h3>on the first order</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        placeholder="+49"
                        className={s.input}
                        onChange={(e) => setPhone(e.target.value)}
                        name="phone"
                    />
                    <input
                        type="submit"
                        value="Get a discount"
                        className={s.submit}
                    />
                </form>
            </div>
        </div>
    );
}
