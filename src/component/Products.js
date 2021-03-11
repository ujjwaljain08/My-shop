import React,{useContext} from 'react'
import {CartContext} from "../Global/CartContext"
import {ProductsContext} from "../Global/ProductsContext"
import Banner from "./Banner"
import "../App.css"
function Products() {
    const {product}= useContext(ProductsContext);
    const {dispatch}=useContext(CartContext)
    
    return (
        <div className="container">
            <Banner />
            <div className="products">
            {
                product.map((products)=>{
                   return  <div className="product" key={products.id}>
                       
                            <div className="product-img">
                                <img src={products.image} />
                            </div>
                        <div className="product-details">
                            <div className="product-name">
                                {products.name}
                            </div>
                            <div className="product-price">
                                ${products.price}.00 /-
                            </div>
                        </div>
                        {products.status==='hot'?<div className="hot">Hot</div>:""}
                        {products.status==='new'?<div className="new">New</div>:""}
                        
                        <div className="add-to-cart" onClick={()=>dispatch({type:'ADD_TO_CART',id:products.id,product:products})}>Add Cart</div>
                       
                    </div>
                })
            }
         </div>
        </div>
        
    )
}

export default Products;
