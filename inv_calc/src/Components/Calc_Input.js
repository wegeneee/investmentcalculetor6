import { useState } from "react"
import './Calc.css'


import './Calc.css'



export default function Calc_Input({ handleMyChange, MyInitialValue }) {

 

    return (
        <section id="user-input">

        <div id="display-col">
             <div className="input-group">
                <label>Initial Investment</label>
                <input
                    type="number"
                    required
                    value={MyInitialValue.initialInvestment}
                    onChange={(invest_event) => handleMyChange('initialInvestment', invest_event.target.value)}
                />
            </div>
            <div className="input-group">
                <label>Annual Investment</label>
                <input
                    type="number"
                    required
                    value={MyInitialValue.annualInvestment}
                    onChange={(annual_inv_event) => handleMyChange('annualInvestment', annual_inv_event.target.value)}
                />
            </div>
        </div>
           
           <div id='display-col'>
             <div className="input-group">
                <label>Expected Return</label>
                <input
                    type="number"
                    required
                    value={MyInitialValue.expectedReturn}
                    onChange={(expRet_event) => handleMyChange('expectedReturn', expRet_event.target.value)}
                />
            </div>
            <div className="input-group">
                <label>Duration</label>
                <input
                    type="number"
                    required
                    value={MyInitialValue.duration}
                    onChange={(dur_event) => handleMyChange('duration', dur_event.target.value)}
                />
            </div>
           </div>
           
        </section>
    );
}