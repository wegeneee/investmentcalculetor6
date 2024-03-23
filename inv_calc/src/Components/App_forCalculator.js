import { useState } from "react"
import Header from "./Header_Calc"
import Calc_Input from "./Calc_Input"
import './Calc.css'
import Result from "./Result"
export default function App_forCalculator(){

     const [userInputValue, setUserInputValue]= useState({
        initialInvestment:10000,
        annualInvestment:2000,
        expectedReturn:6,
        duration:10
    })

    const isvalidInput = userInputValue.duration > 0;
    function handleChange(inputIdentifier,NewInput){
        setUserInputValue(perviousValue=>{
             return{
                 ...perviousValue,
                [inputIdentifier]: + NewInput
                // [inputIdentifier]:+ NewInput    IS FOR IF THE VALUES IS SHOW IN THE FORM OF THE CONNCATINATION BUT THE NOW THERE IS NO SUCH ERRO OF CONNCATINATION
             }
        })
    }

    return(
        <div id="calc_page">
        <Header/>
        <Calc_Input MyInitialValue={userInputValue} handleMyChange={handleChange}/>
        {!isvalidInput && <p>please the duration must be greater than zero</p>}
        {isvalidInput && <Result ResultInput={userInputValue} /> } 


        </div>
    )
}
