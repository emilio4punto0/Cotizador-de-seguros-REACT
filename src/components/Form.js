import React, {Component} from 'react';

class Form extends Component {
  
    brandRef = React.createRef();
    yearRef = React.createRef();
    basicPlanRef = React.createRef();
    completedPlanRef = React.createRef();
    
    quotingCar = (e) => {
        e.preventDefault();

            //leer plan
        const plan = this.basicPlanRef.current.checked ?'basico' : 'completo';
            // crear objeto
            const carInfo = {
                brand: this.brandRef.current.value,
                year: this.yearRef.current.value,
                plan: plan,
            }

            //enviarlo al componente principal con props
        this.props.quoteInsurance(carInfo)
            //resetear el formulario para que reinicie ne blanco
        e.currentTarget.reset()

        }
          

    render() {
        return (
                
            <form className="quoting__car" onSubmit={this.quotingCar}>
                <div className="quoting__car-items">
                    <label>Marca</label>
                    <select name="brand" ref={this.brandRef}>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </select>
                </div>

                <div className="quoting__car-items">
                    <label>Año</label>
                    <select name="year" ref={this.yearRef}>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                        <option value="2014">2014</option>
                        <option value="2013">2013</option>
                        <option value="2012">2012</option>
                        <option value="2011">2011</option>
                        <option value="2010">2010</option>
                        <option value="2009">2009</option>
                        <option value="2008">2008</option>
                    </select>
                </div>
                <div className="quoting__car-items">
                    <label>Plan:</label>
                    <input type="radio" name="basico" ref={this.basicPlanRef} value="basico" id="basico"/> Básico
                    <input type="radio" name="completo" ref={this.completedPlanRef} value="completo" id="completo"/> Completo
                </div>

                <button type="submit" className="button">Cotizar</button>
            </form>
                    
        )
    }
}

export default Form;
