import "./App.css";
import Header from "./compounts/Header";
import ProductList from "./compounts/ProductList";
import CartList from"./compounts/CartList";
import { useState } from "react";
function App(){
  const [product ,setProduct] =useState([
    {
      url:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRT6UyxH1LOmcENV7aBjCkwYVkNBkaM3y6FJ1L0lwKbxoNh59f8uX7L_CKtyGqFqqCWTtuFwCwK4bAp6Q6lOw9CZYPG4I__WXgjddp4P1ED4vfeuS1dTNdiEfI&usqp=CAE",
      name:"shoes",
      category:"shoes",
      seller:"seller",
      price:24,
    },
    {
      url:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRT6UyxH1LOmcENV7aBjCkwYVkNBkaM3y6FJ1L0lwKbxoNh59f8uX7L_CKtyGqFqqCWTtuFwCwK4bAp6Q6lOw9CZYPG4I__WXgjddp4P1ED4vfeuS1dTNdiEfI&usqp=CAE",
      name:"floewer",
      category:"jkdjd",
      seller:"worm",
      price:34,
  },
  ]);
  const [cart,setCart] =useState([]);
  const [showcart ,setShowCart]=useState(false);
  const addToCart=(data)=>{
   setCart([...cart,{...data,quantity:1}]);
  };
  const handleShow=(value)=>{
    setShowCart(value);
  };
  return(
    <div>
      <Header count={cart.length} handleShow={handleShow}></Header>
      { showcart ?(
        <CartList cart={cart}></CartList>
      
      ):(
        <ProductList product={product} addToCart={addToCart}></ProductList>
      )}
    </div>
  );
}

export default App;


