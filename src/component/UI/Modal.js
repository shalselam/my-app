// import MealItems from '../meals/MealItem'
import styles from './modal.module.css'
import ReactDOM from 'react-dom'
import { useState } from 'react'

const portalELement=document.getElementById('overLays')
const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onHide}></div>
}
const ModalOverlay = props => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>{props.children} </div>

        </div>
    ) 
}
const Modal = (props) => {
    return (
        <>
            {/* <Backdrop />
            <ModalOverlay>{props.children}</ModalOverlay> */}
            {ReactDOM.createPortal(<Backdrop onHide={props.onBack} />,portalELement)}
            {ReactDOM.createPortal(<ModalOverlay> {props.children}</ModalOverlay>,portalELement)}
        </>
    )

}
export default Modal