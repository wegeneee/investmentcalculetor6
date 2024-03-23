
export  function calcInvestment({
    initialInvestment,
        annualInvestment,
        expectedReturn,
        duration,
}){
    const annualData =[];
    let investmentValue= initialInvestment;

    for(let i =0; i< duration ; i++){
        const interestEearnedInYear = investmentValue * expectedReturn;
        investmentValue += interestEearnedInYear + annualInvestment;

        annualData.push({
            year : i +1,
            interest:interestEearnedInYear,
            valueEndOfYear:investmentValue,
            annualInvestment:annualInvestment,
        })

    }

    return annualData; // Return the array of annual data

}



export const formatter = new Intl.NumberFormat('en-ET',{   // FOR THE DOLLAR USE en-US AND  currency: 'USD',
    style: 'currency',
    currency: 'ETB',
    minimumFractionDigits:0,
    maximumFractionDigits:0
});





