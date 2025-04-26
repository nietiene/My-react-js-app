import React, { useState } from "react";
import ProductFilter from "./categoryFilter";
import ProductList from "./productList";

const Product = () => {
    const [category, setCategory] = useState("all"); //for Products

    return (
        <>
           < ProductFilter category={category} setCategory={setCategory}/>
           < ProductList category={category}/>   
        </>  
    )
}

export default Product;