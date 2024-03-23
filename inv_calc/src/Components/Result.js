
import  './Calc.css'
import { useState } from 'react';
import {calcInvestment ,formatter}  from './CalculateInvestment'
export default function Result({ResultInput}){

 const resultData =  calcInvestment(ResultInput);
 const initialInvestment =resultData[0].valueEndOfYear-
 resultData[0].interest-
 resultData[0].annualInvestment;
    return <table id='result-data-intable'>
        <thead>
        <th>year</th>
        <th>Interest (Year)</th>
        <th> Investment Value</th>
        <th>Total Interest</th>
        <th>Investment Capital</th>
       

        </thead>
        <tbody>
        {resultData.map((mydata)=>{
            const TotalInterest = mydata.valueEndOfYear  * mydata.year - initialInvestment;
            const TotalAmoutOfInvested= mydata.valueEndOfYear-TotalInterest;
            return(
                <tr key={mydata.year}>
                    <td>{mydata.year } </td>
                    <td>{formatter.format(mydata.interest) } </td>
                    <td>{formatter.format(mydata.valueEndOfYear) } </td>
                    <td>{formatter.format(TotalInterest) } </td>
                    <td>{formatter.format(TotalAmoutOfInvested)} </td>

                </tr>
            )
        })}

        </tbody>
    </table>
}
