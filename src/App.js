import { useState } from 'react';
import Cart from './component/Cart/Cart';
import Header from './component/Layout/Header';
import Meals from './component/meals/Meals'
import CartProvider from './store/CartProvider';
function App() {
  const [CartShown, setCartshown] = useState(false)
  const showCartHandler=()=>{
     setCartshown(true)
  }
const hideCartHandler=()=>{
  setCartshown(false)
}
  return (
    <CartProvider>
     {CartShown && <Cart onClose={hideCartHandler }/>}
      <Header onDisplayCrd={showCartHandler}/>
      <main>
        <Meals />
      </main>
      {/* </Header> */}
    </CartProvider >
  );
}

export default App;
