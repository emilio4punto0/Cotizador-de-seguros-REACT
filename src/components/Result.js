import React, {Component} from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
class Result extends Component{
    render(){

        const result = this.props.result;
        const message = (!result) ? 'Por favor elige marca, año y tipo de plan' : 'El total es: $'
        return(
           <div className="final__total">
                {message}
                <TransitionGroup component="span" className="result">
                    <CSSTransition
                            classNames="result"
                            key={result}
                            timeout={{enter: 500, exit: 500}}>
                            <span>{result}</span>
                    </CSSTransition>
                </TransitionGroup>
           </div>
        )
    }
}
export default Result;
