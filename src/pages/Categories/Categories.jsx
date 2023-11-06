// import React from 'react'
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import s from "./Categories.module.scss";
import { fetchCategories } from "../../store/asyncActions/categories";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import { Link } from "react-router-dom";
import { loadCartFromLocalStorage } from "../../store/reducers/CartReducer";

export default function Categories({ demo }) {
    const categories = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);

    // задаю пропами ограничение для рендера
    let quantity;
    if (demo !== undefined) {
        quantity = 4;
    } else quantity = categories?.length;

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(loadCartFromLocalStorage());
        setIsLoading(false);
    }, [dispatch]);

    if (isLoading) {
        return <div>Download categories...</div>;
      }
    // console.log(state);
    return (
        <div className={s.categories}>
            {quantity !== null && quantity !== undefined && quantity != 4 && (
                <h2 className={s.categories__title}>Categories</h2>
            )}
            <div className={s.categories__items}>
                {categories.slice(0, quantity).map((category) => (
                    <Link to={`/categories/${category.id}`}  key={category.id} className={s.categories__link}>
                        <CategoryItem key={category.id} category={category} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
