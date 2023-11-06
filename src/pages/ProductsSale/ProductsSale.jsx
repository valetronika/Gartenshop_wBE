import React, { useEffect } from "react";
import ProductList from "../../components/ProductList/ProductList";
import { useDispatch, useSelector } from "react-redux";
import Filters from "../../components/Filters/Filters";
import { fetchSalesProducts } from "../../store/asyncActions/products";
import Title from "../../components/Title/Title";
import { loadCartFromLocalStorage } from "../../store/reducers/CartReducer";

export default function ProductsSale() {
    const title = useSelector((state) => state.products.categoryTitle);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSalesProducts());
        dispatch(loadCartFromLocalStorage());
        console.log("getSaleProducts загружен");
    }, [dispatch]);

    return (
        <div>
            {/* <h2>{title}</h2> */}
            <Title titleValue={title} titleClassName={'block__title block__title-margin'}/>

            <Filters />
            <ProductList type={"sales"} />
        </div>
    );
}
