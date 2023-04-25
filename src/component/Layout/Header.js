import { Fragment } from "react"
import images from '../../assets/meals.jpg'
import classes from './Header.module.css'

import HeaderButton from "./HeaderCartButton"
const Header = props=>{
    return <Fragment>
    <header className={classes.header}> 
        <h1>ReactMeals</h1>
        <HeaderButton onButton={props.onDisplayCrd} />
    </header >
    <div className={classes['main-image']}>
        <img src={images} />
    </div>
    </Fragment>
}
export default Header