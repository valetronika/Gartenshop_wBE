import React, { useEffect } from "react";
import s from "./CategoryPage.module.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByCategory } from "../../store/asyncActions/products";
import ProductList from "../../components/ProductList/ProductList";
import Filters from "../../components/Filters/Filters";
import Title from "../../components/Title/Title";

export default function CategoryPage() {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductsByCategory(id));
        console.log("CategoryPage загружен");
    }, [dispatch]);


    
    const productsListByCategory = useSelector((state) => state.products.productList);
    const title = useSelector((state) => state.products.categoryTitle)
    // console.log(productsListByCategory, "productsListByCategory");
    return (
        <div className={s.products__container}>
            {/* <h2>{title}</h2> */}
            <Title titleValue={title}  titleClassName={'block__title block__title-margin'}/>
            <Filters type={"all"} />
            <ProductList id={id} type={'byCategory'}/>
        </div>
    );
}
