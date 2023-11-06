import React from "react";
import { useSelector } from "react-redux";
import ProductIem from "../ProductIem/ProductIem";
import s from './ProductList.module.scss';

export default function ProductList({ type }) {
    const productsList = useSelector(
        (state) => state.products.productList
    ).filter((el) => {
        if (type === "demo") {
            return el.isShowBySale;
        } else {
            return el.isShowByPrice && el.isShowBySale;
        }
    });

    const classnameContainer = type != "demo" ? s.products__container : s.products__demo
    return (
        <div className={classnameContainer}>
            {type != "demo" &&
                productsList.map((el) => (
                    
                        
                        <ProductIem key={el.id} type="itemOverView" product={el} />
                    
                ))}
        </div>
    );
}
