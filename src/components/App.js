import React, { Component} from 'react';
import Header from './Header';
import Form from './Form';
import {getYearDifference,brandCalculate, getPlan} from '../helper';
import Resume from './ResumeQuoting';
import Result from './Result';

class App extends Component {

  state = {
    result: '',
    data: {}
  }
    quoteInsurance = (data) => {
      const {brand, plan, year} = data;

      //agregar una base al valor del seguro de 2000
      let result = 2000;

      //obtener la diferencia de años y
      const yearDifference = getYearDifference(year); 
      //por cada año restar el 3% al valor del seguro
      result -= ((yearDifference * 3) * result / 100);
      
      //Americano 15% Asiatico 5% y europeo 30% 
      //de incremento al valor actual
      result = brandCalculate(brand) * result;

      //incrementar valor Plan básico 20 % y completo 50%

      let planIncrement = getPlan(plan);

      result = parseFloat(planIncrement * result).toFixed(2);

      const carData = {
        brand : brand,
        plan : plan,
        year : year,
      }

      this.setState({
        result: result, 
        data: carData,
      })
    }

  render(){
    return(
      <div className="container">
        <Header
        title = 'Cotizador de seguro'
        />
        <div className="form__container">
        <Form
        quoteInsurance={this.quoteInsurance}
        />
        <Resume
        data={this.state.data}
        result={this.state.result}
        />
        <Result/>
        </div>
      </div>
    );
  }
}

export default App;
