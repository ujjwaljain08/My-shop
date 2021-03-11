import React from 'react'
import Products from '../component/Products';

function CartReducer(state,action) {
    const {shoppingCart,totalPrice,qty}=state;
  
    let product;
    let index; 
    let updatedPrice;
    let updateQty;
    switch (action.type) {
        case 'ADD_TO_CART':
             const check=shoppingCart.find(product=>product.id===action.id)
             if(check){
                 return state;
             }else{
                product=action.product;
                product['qty']=1;
                updateQty=qty+1;
                updatedPrice=totalPrice+product.price;
                return {shoppingCart:[product,...shoppingCart],totalPrice:updatedPrice,qty:updateQty}
             }
             break;
             case "INC":
                 product=action.cart;
                 product.qty+=1;
                 updatedPrice=totalPrice+product.price;
                 updateQty=qty+1;
                 index=shoppingCart.findIndex(cart=>cart.id===action.id)
                 shoppingCart[index]=product;
                 return{shoppingCart:[...shoppingCart],totalPrice:updatedPrice,qty:updateQty}
                 break;
            case "DEC":
                product=action.cart;
                if(product.qty>1){
                     product.qty=product.qty-1;
                     updatedPrice=totalPrice-product.price;
                     updateQty=qty-1;
                     index=shoppingCart.findIndex(cart=>cart.id===action.id)
                     shoppingCart[index]=product;
                     return{shoppingCart:[...shoppingCart],totalPrice:updatedPrice,qty:updateQty}


                }else{
                    return state;
                }
                break;
            case "DELETE":
                const filtered=shoppingCart.filter(product=>product.id!==action.id)
                product=action.cart;
                updateQty=qty-product.qty;
                updatedPrice=totalPrice-product.price*product.qty;
                return {shoppingCart:[...filtered],totalPrice:updatedPrice,qty:updateQty}

                break;

            case "EMPTY":
                return {shoppingCart:[],totalPrice:0,qty:0}

         default:
             return state;
    
        
    }
}

export default CartReducer
