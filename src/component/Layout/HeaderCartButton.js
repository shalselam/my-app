import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import { useContext } from 'react'
import CartContext from '../../store/CartContext'

const HeaderButton = props => {
    const cartCtx = useContext(CartContext)
    const numCrtofItem = cartCtx.items.reduce((curNum,item)=>{
        return curNum+  item.amount
    },0)
    return <button className={classes.button} onClick={props.onButton}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>your cart</span>
        <span className={classes.badge}>
            {numCrtofItem}
        </span>
    </button>
}
export default HeaderButton 