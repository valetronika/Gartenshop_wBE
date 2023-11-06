import { useDispatch } from "react-redux";
import s from "./CategoryItem.module.scss";
import React from "react";
// import {byCategoriesItems} from '../../store/reducers/ProductsListReducer'


export default function CategoryItem({ category }) {
    const dispatch = useDispatch();
    const handleClick = ()=>{
        // dispatch(byCategoriesItems(category.id))
        // console.log(category.id);

    }
    return (
        <div className={s.category__item} onClick={handleClick}>

            <div className={s.category__img}>
                <img
                    src={`https://telran-project-backend-y5gf.onrender.com/${category.image}`}
                    alt={category.title}
                />
            </div>
            <h2>{category.title}</h2>
        </div>
    );
}
