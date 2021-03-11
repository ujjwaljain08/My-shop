import Navbar from "./component/Navbar"
import Notfound from "./component/Notfound"
import ProductsContextProvider from "./Global/ProductsContext";
import Products from "./component/Products"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Cart from "./component/Cart"
import CartContextProvider from "./Global/CartContext"

import './App.css';
 
function App() {
  return (
    <div className="App">
     
       <ProductsContextProvider>
        <CartContextProvider>
         <Router>
          <Navbar />
        

           <Switch>
             <Route path="/" exact component={Products}/>
             <Route path="/cart" exact component={Cart}/>
             <Route  exact component={Notfound}/>
           </Switch>
 
         </Router>
    
     </CartContextProvider>
       
       
      </ProductsContextProvider>
    </div>
  );
}

export default App;
