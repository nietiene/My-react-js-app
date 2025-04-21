import React from "react";

const Product = () => {
    const Info = [
        {id: 1, name:'bonnie bears', image: '/images/boonie.jpeg'},
        {id: 2, name:'mr bean', image: '/images/mrbean.jpeg'},
    ];

    return (
        <div>
            <h2>Product Info</h2>
            {Info.map((product) => {
                return (
                   <div key={product.id}>
                      <p>name: {product.name}</p>
                      <img src={product.image} alt={product.name}/>
                   </div>
                );
            })}
        </div>
    )
}


const Propss = (props) => {
    return (
       <div>
        <p>Name: {props.name}</p>
        <p>Place: {props.place}</p>
       </div>
    )
}
export default Product;
export {Propss};