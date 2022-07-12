import {useContext } from 'react'
import CalcContext from '@/components/CalculatorContext';
import styles from '@/components/Button/button.module.scss'

const Button = ( {label="?", cornerType="none"}) => {
    const context = useContext(CalcContext);

    const updateCalculation = (label) => {
        if(label === '='){
            context.doCalculation()
        }else{
            context.updateFunction(`${context.data}${label}`)
        }
    }

    return (
       <button type="button" onClick={() => updateCalculation(label)} className={`${styles.button} ${cornerType!=="none" ? styles[cornerType] : ""} ${label === '=' ? styles.reversed : ""}`}>{label}</button>
    )
}

export default Button