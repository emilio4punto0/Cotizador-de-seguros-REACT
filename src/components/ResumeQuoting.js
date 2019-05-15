import React, {Component} from 'react';
import {firstUpperCase} from '../helper'
import Result from './Result';

class Resume extends Component {

    showResume = () => {
    const {brand, year, plan} = this.props.data;

    if(!brand || !year || !plan) return null;

        return(
            <div className="resume">
                <h2>Resumen de Cotización</h2>
                <li>Marca: {firstUpperCase(brand)}</li>
                <li>Plan: {firstUpperCase(plan)}</li>
                <li>Año del auto: {firstUpperCase(year)}</li>
            </div>
            )
}
    render(){
        return(
            <div>
                {this.showResume()}
                <Result
                result={this.props.result}
                />
            </div>
        )
    }

}

export default Resume;
