import styles from './MeaForm.module.css'
import { useState, useRef } from 'react'
import Input from '../UI/Input'

const MealForm = (props) => {
    const [validEenter, setValiedenter] = useState(true)
    const inputRefAmnt = useRef(null)
const [enteramnt,setenteramnt]=useState('1')
    const submitHandler = event => {
        event.preventDefault()
        const entrdAmnt = enteramnt
        console.log(entrdAmnt);
        const CngenterdAmnt = +entrdAmnt
        if (
            entrdAmnt.trim().length === 0 || CngenterdAmnt < 1 ||
            CngenterdAmnt > 5) 

            {
                setValiedenter(false)
                return;
            }


            props.onAddtocart(CngenterdAmnt)
        }
        return (
            <>
                <form className={styles.form} onSubmit={submitHandler}>
                    <Input
                        ref={inputRefAmnt}
                        onchange={(e)=>{setenteramnt(e.target.value)
                        console.log(e.target.value);
                        } 
                    }
                        label='Amount'
                        input={{
                            id: 'amount',
                            type: 'number',
                            min: '1',
                            max: '6',
                            defaultValue: '1'
                        }}>
                    </Input>
                    <button>+ Add</button>
                    {!validEenter && <p>enter valid number (1-5).</p>}
                </form>
            </>
        )
    }
    export default MealForm
