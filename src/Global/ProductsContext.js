import React,{createContext,useState} from 'react'
import product_9 from "../assets/product_9.jpg"
import product8 from "../assets/product8.jpg"
import product7 from "../assets/product7.jpg"
import product6 from "../assets/product6.jpg"
import product5 from "../assets/product5.jpg"
import product4 from "../assets/product4.jpg"
import product3 from "../assets/product3.jpg"
import product2 from "../assets/Product2.jpg"
import product1 from "../assets/Product1.jpg"
 
//import product2 from "../Product2.jpg"
 
 


export const ProductsContext=createContext();

const ProductsContextProvider=(props) =>{
    const [products] = useState([
        {
            id:1,
            name:"product_1",
            price:300,
            image:product1,
            status:"new"
        },
        {
            id:2,
            name:"product_2",
            price:300,
            image:product2,
            status:"hot"
        },
        {
            id:3,
            name:"product_3",
            price:300,
            image:product3,
            status:"hot"
        },
        {
            id:4,
            name:"product_4",
            price:300,
            image:product4,
            status:"hot"
        },
        {
            id:5,
            name:"product_5",
            price:300,
            image:product5,
            status:"hot"
        },
        {
            id:6,
            name:"product_6",
            price:300,
            image:product6,
            status:"hot"
        },
        {
            id:7,
            name:"product_7",
            price:300,
            image:product7,
            status:"new"
        },
        {
            id:8,
            name:"product_8",
            price:300,
            image:product8,
            status:"hot"
        },
        {
            id:9,
            name:"product_9",
            price:300,
            image:product_9,
            status:"hot"
        },
 
    ]);

    return (
        <div>
            <ProductsContext.Provider value={{product:[...products]}} >
                {props.children}
            </ProductsContext.Provider >
        </div>
    )
}

export default ProductsContextProvider
