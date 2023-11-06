import React, { useEffect, useState } from "react";
import {  useSelector } from "react-redux";

export default function Title({ titleValue,id,titleClassName}) {
    const categories = useSelector(state => state?.categories);
    const title = categories?.filter(el=> el.id == id)[0]?.title ?? titleValue;


    const [className, setClassName] = useState(titleClassName);

    useEffect(()=>{
        setClassName(titleClassName)
    }, [titleClassName])

    return (
        <>
            <h2 className={className}>{title}</h2>
        </>
    );
}
