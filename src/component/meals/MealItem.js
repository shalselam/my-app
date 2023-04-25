import classes from './mealitem.module.css'
import MealForm from './MeaalForm'
import { useContext } from 'react'
import CartContext from '../../store/CartContext'
const MealItems = props => {
    const crtcntx=useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`

     const   AddToCartHndler=(amnt)=>{
        crtcntx.addItem({
            id:props.id,
            name:props.name,
            amount:amnt,
            price:props.price 
        })
    
    }


    return (
    <li className={classes.meal}>
        <div><h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{props.price}</div>
        </div>
        <div>
            <MealForm  onAddtocart ={AddToCartHndler}/>
        </div>
        </li>
   )
}
export default MealItems