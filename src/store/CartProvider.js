import CartContext from "./CartContext"
import { useReducer } from "react"

const defaultState = {
    items: [],
    totalAmount: 0,

}
const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        console.log(state);
        const newItem = state.items.concate  (action.items)
        const totalNewItem = state.totalAmount + action.items.price*action.items.amount
    
    return {
        items:newItem,
        totalAmount:totalNewItem
    }
}
}


const CartProvider = props => {
    const [crtState, dispachAction] = useReducer(cartReducer, defaultState)
    const addItemHandler = item => {
        console.log(item);
        dispachAction({ type: 'ADD', items: item })
    }
    const removeItemHandler = id => {
        dispachAction({ type: 'REMOVE', id: id })
    }
    const cartContext = {
         items: crtState.items,
        totalAmount: crtState.totalAmount,
        addItem: addItemHandler,
        revomeItem: removeItemHandler,
    }
    return (<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
    )
}
export default CartProvider