
import {useState} from 'react';
import CalcContext from '@/components/CalculatorContext';
import Button from '@/components/Button/Button';

import styles from '@/components/Calculator/calculator.module.scss'

const Calculator = () => {

    const [calculation, setCalculation]  = useState('')
    const [calculationResult, setCalculationResult] = useState('')


    const doCalculation = () => {
        setCalculationResult(new Function('return '+calculation)())
    }

    const resetCalculation = () => {
        setCalculation('')
        setCalculationResult('')
    }

    return (
         <CalcContext.Provider value={{data:calculation, updateFunction:setCalculation, doCalculation: doCalculation}}>
        <section className={styles.calculatorContainer}>
            <div className={styles.calculatorContainer__inner}>
                <div className={styles.calculatorContainer__inner__display}>
                    <input data-testid="result-display" type="text" readOnly value={calculationResult} />
                </div>

                
                    <div className={styles.calculatorContainer__inner__operations }>                        
                        <input data-testid="calculation" type="text" readOnly value={calculation} />
                        {calculation !== '' && 
                            <button type="button" onClick={()=> resetCalculation()}>del</button>
                        }
                    </div>


                 <div className={styles.calculatorContainer__inner__keypad__container }>
                    <Button label='7' cornerType="topL" gridArea="seven" />
                    <Button label='8' gridArea="eight"/>  
                    <Button label='9' gridArea="nine"/>  
                    <Button label='/' cornerType="topR" gridArea="divide" />
                    
                    <Button label='4' gridArea="four" />
                    <Button label='5' gridArea="five" />
                    <Button label='6' gridArea="six" />
                    <Button label='*' gridArea="multiply" />
                    
                    <Button label='1' gridArea="one" />
                    <Button label='2' gridArea="two" />
                    <Button label='3' gridArea="three" />
                    <Button label='-' gridArea="subtract" />

                    <Button label='0' cornerType="btmL" gridArea="zero" />
                    <Button label='.' gridArea="decimal" />
                    <Button label='=' gridArea="equal" />
                    <Button label='+' cornerType="btmR" gridArea="add" />                  
                </div>                
            </div>            
        </section>
        </CalcContext.Provider>

    )
}

export default Calculator