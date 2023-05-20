import { useState } from "react";
import {Section} from "./Section" 
import { FeedbackBtn } from "./feedbackBtn";
import { Statistics } from "./statistics";
import { Notification } from "./Notification";
 
export const Feedback = () => {
    const [good, setGood] = useState(0); 
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const stateBtn = {good, neutral, bad}

    const handleClick = (name) => {
        console.log(name)
        switch (name) {
            case 'good':
                setGood(good + 1)
                break;
             case 'neutral':
                setNeutral(neutral + 1)
                break;    
             case 'bad':
                setBad(bad + 1)
                break;     
            default:
                break;
        }
    }

    const countTotalFeedback = () => {
     return Object.values(stateBtn).reduce((acc, current) => acc + current, 0);
   } 

   const countPositiveFeedbackPercentage = () => {
     return Math.round((good / countTotalFeedback()) * 100) || 0;
   }

    
    return (
        <div>
           
            
         <Section title='Please leave feedback'>
            <FeedbackBtn options = {Object.keys(stateBtn)}
                onLeaveFeedback={handleClick} />
        </Section>
        
        <Section title='Statisctics'>
          {countTotalFeedback() ?
          // Section
        <Statistics good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
            countTotalFeedback={countPositiveFeedbackPercentage()} />
          // Or
            :<Notification message="There is not have feedback"/>}
           
        </Section>
         
          </div>
    );
}

