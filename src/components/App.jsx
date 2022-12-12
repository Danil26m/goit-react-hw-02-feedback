// export const App = () => {
  import { Component } from "react";
  import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification";
import "./style.css";
  class App extends Component{
    constructor(){
      super();
      this.state = {
        good: 0,
        neutral: 0,
        bad: 0,
      }
      this.addGod = this.addGod.bind(this);
      this.addNeutral = this.addNeutral.bind(this);
      this.addBad = this.addBad.bind(this);
    }
    addGod(){
      this.setState({
        good: this.state.good +=1,
      }) 
  
    }
    addNeutral(){
      this.setState({
        neutral:  this.state.neutral +=1 ,  
      })
    }
    addBad(){
      this.setState({
        bad: this.state.bad +=1,
      })
    }
    countTotalFeedback(){
        return this.state.good + this.state.neutral + this.state.bad;
      }
    countPositiveFeedbackPercentage(){
      const positive = Math.round((this.state.good / this.countTotalFeedback()) * 100) 
      return positive;
      }
      render(){
      const{good,neutral,bad} = this.state;
      const feedback = [this.addGod,this.addNeutral,this.addBad];
      return ( 
    <> 
    <h2>Please leave feedback</h2>
    <FeedbackOptions  onLeaveFeedback={feedback}/> 
    <h2>Statistics</h2> 
    {this.countPositiveFeedbackPercentage()?
     <Statistics  good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
     :<Notification message="There is no feedback"/>}
    
    </>
    
  );
    }
  }
  export default App;
// };
