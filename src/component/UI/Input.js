import classes from './input.module.css'
// import MeealForm from '../meals/MeaalForm'
import React from 'react'

const Input= React.forwardRef( (props,ref) =>{
return ( <div className={classes.input}>
    <label htmlFor={props.input.id}>{props.label}</label>
    <input ref={ref} {...props.input}
      onChange={props.onchange}
      />

</div>
)
})
export default Input