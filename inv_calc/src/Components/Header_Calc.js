import './Calc.css'
import logo from './asset/investment-calculator-logo.png'
export default function  Header_Calc(){
    return(
        <section id='Calc-header-section'>
            <img src={logo} alt='logo for the invstment calac'/>
            <h1>WG Investment Calculator </h1>
        </section>
    )
}
