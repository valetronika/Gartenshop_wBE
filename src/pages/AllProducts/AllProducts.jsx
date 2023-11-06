import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/asyncActions/products";
import ProductList from "../../components/ProductList/ProductList";
import Filters from "../../components/Filters/Filters";
import Title from "../../components/Title/Title";
import { loadCartFromLocalStorage } from "../../store/reducers/CartReducer";

export default function AllProducts() {
    const title = useSelector((state) => state.products.categoryTitle);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
        dispatch(loadCartFromLocalStorage());
        console.log("AllProducts загружен");
    }, [dispatch]);
    return (
        <div>
            {/* <h2>{title}</h2> */}
            <Title titleValue={title} titleClassName={'block__title block__title-margin'} />

            <Filters type={"all"} />
            <ProductList />
        </div>
    );
}
