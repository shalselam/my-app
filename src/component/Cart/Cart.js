import Modal from '../UI/Modal'
import classes from './cart.module.css'



const Cart = props => {
    const cartItems = <ul className={classes['cart-item']}>{[
        { id: 'c1', name: 'asa', amount: 2, price: 120.23 },
    ].map((items) => <li>{items.name}</li>)}</ul>
    return (
        <Modal onBack={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>300.9</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}
export default Cart