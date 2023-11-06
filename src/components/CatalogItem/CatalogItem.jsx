import { Link } from "react-router-dom";
import Button from "../Button/Button";
import s from "./CatalogItem.module.scss";
import React from "react";
import Categories from "../../pages/Categories/Categories";
import Title from "../Title/Title";

export default function CatalogItem() {
    return (
        <div>
            <div className={s.catalog__navi}>
                <Title titleValue={'Catalog'} titleClassName={'block__title'}/>

                <Link to="/categories">
                    <Button name="All categories" className="categories" />
                </Link>
            </div>
            <Categories demo={true} />
        </div>
    );
}
