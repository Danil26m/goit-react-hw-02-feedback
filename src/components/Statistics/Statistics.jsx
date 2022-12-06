import { Component } from "react";
import PropTypes from "prop-types";

class Statistics extends Component{
   
render(){
    const {good,neutral,bad,total, positivePercentage} = this.props;
    return(
        <div>
           <ul>
            <li><p>Good: {good}</p></li>
            <li><p>Neutral: {neutral}</p></li>
            <li><p>Bad: {bad}</p></li>
            <li><p>Total: {total}</p></li>
            <li><p>Positive feedback: {positivePercentage} %</p></li>
           </ul>
        </div>
    );
}
}
Statistics.propTypes ={
    good : PropTypes.number.isRequired,
    neutral : PropTypes.number.isRequired,
    bad : PropTypes.number.isRequired,
    total: PropTypes.any.isRequired,
    positivePercentage: PropTypes.any.isRequired
}
export default Statistics;