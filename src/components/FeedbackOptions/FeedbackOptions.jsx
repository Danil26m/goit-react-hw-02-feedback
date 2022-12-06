import { Component } from "react";
import PropTypes from "prop-types";

class FeedbackOptions extends Component{
    render(){
        return(
            <div>
                <button  type="button" onClick={this.props.onLeaveFeedback[0]}>Good</button>
                <button  type="button" onClick={this.props.onLeaveFeedback[1]}>Neutral</button>
                <button  type="button" onClick={this.props.onLeaveFeedback[2]}>Bad</button>
            </div>
        );
    }
}
FeedbackOptions.propTypes ={
   onLeaveFeedback:  PropTypes.arrayOf(
     PropTypes.any.isRequired      
)
}
export default FeedbackOptions;