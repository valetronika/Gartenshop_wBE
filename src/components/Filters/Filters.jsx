import React, { useEffect, useState } from "react";
import s from "./Filters.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
    alphabeticalSortReducerAscending,
    alphabeticalSortReducerDescending,
    discountSortReducer,
    filterProductsByPrice,
    priceSortReducerAscending,
    priceSortReducerDescending,
    toggleSaleProducts,
} from "../../store/reducers/ProductsListReducer";
import Button from "../Button/Button";

export default function Filters({ type }) {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.productList);

    const handleChange = (e) => {
        const sorting = e.target.value;
        if (sorting === "price_asc") {
            dispatch(priceSortReducerAscending());
        }
        if (sorting === "price_desc") {
            dispatch(priceSortReducerDescending());
        }
        if (sorting === "disc_price_asc") {
            dispatch(discountSortReducer());
        }

        if (sorting === "abc") {
            dispatch(alphabeticalSortReducerAscending());
        }
        if (sorting === "zyx") {
            dispatch(alphabeticalSortReducerDescending());
        }
    };
    //  про чекбокс
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        dispatch(toggleSaleProducts(!isChecked));
    };
    // фильтр по цене
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");

    // версия 1 фильтр по кнопке ОК
    // const handlePriceFilter = () => {
    //     const min = parseFloat(minPrice);
    //     const max = parseFloat(maxPrice);

    //     if (!isNaN(min) || !isNaN(max)) {
    //         const validMin = !isNaN(min) ? min : -Infinity;
    //         const validMax = !isNaN(max) ? max : Infinity;

    //         dispatch(filterProductsByPrice({ min: validMin, max: validMax }));
    //     }
    // };

    // версия 2 (изменение цены без клика 'ok')

    useEffect(() => {
        const min = parseFloat(minPrice);
        const max = parseFloat(maxPrice);

        if (!isNaN(min) || !isNaN(max)) {
            const validMin = !isNaN(min) ? min : -Infinity;
            const validMax = !isNaN(max) ? max : Infinity;

            dispatch(filterProductsByPrice({ min: validMin, max: validMax }));
        }
    }, [minPrice, maxPrice]);

    return (
        <div className={s.filters} onChange={handleChange}>
            {/* фильтры */}
            <div className={s.filters__form}>
                <p>Price</p>
                <div className={s.filters__inputs}>
                    <input
                        type="number"
                        placeholder="from"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="to"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                    />
                </div>
                {/*  версия 2 (изменение цены без клика 'ok') */}
                {/* <Button
                    // clickHandle={handlePriceFilter}
                    name={"OK"}
                    className={"button_ok"}
                /> */}
            </div>

            {/* чекбокс */}
            {type === "all" && (
                <div className={s.checkbox}>
                    <p>Discounted items</p>
                    <label className={s.checkbox__label}>
                        <input
                            type="checkbox"
                            className={s.checkbox__input}
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <span className={s.checkbox__span}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="40"
                                height="40"
                                viewBox="0 0 48 48"
                            >
                                <path
                                    fill={isChecked ? "black" : "white"}
                                    d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"
                                ></path>
                            </svg>
                        </span>
                    </label>
                </div>
            )}
            {/* селекты */}
            <div className={s.filters__select}>
                <p>Sorted</p>
                <select onChange={handleChange}>
                    <option value="price_asc">Price ascending</option>
                    <option value="price_desc">Price descending</option>
                    <option value="disc_price_asc">
                        Discounted price ascending
                    </option>
                    <option value="abc">Alphabetical ascending</option>
                    <option value="zyx">Alphabetical descending</option>
                </select>
            </div>
        </div>
    );
}
