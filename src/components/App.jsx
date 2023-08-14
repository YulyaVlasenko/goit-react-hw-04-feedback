
import { Statistic } from "./Statistic/Statistic";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";
import { useState } from "react";

const App = () => {

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  })

  const { good, neutral, bad } = feedback
  

  const onLeaveFeedback = (option) => {
    setFeedback((prev) => ({
      ...prev, 
      [option]: prev[option] + 1
    }))
  }

  const countTotalFeedback = () => {
    return good + neutral + bad
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round(good * 100 / countTotalFeedback())
  }

  const totalFeedback = countTotalFeedback()

  return (
    
    <>
     <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onLeaveFeedback}></FeedbackOptions>
   </Section>
    <Section title='Statistic'>
       {totalFeedback > 0 ?
            <Statistic good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} />
            : 
          <Notification message="There is no feedback"></Notification>}
      </Section>
    </>
  )
}

App.propTypes = {}

export default App

// class App extends Component {
//   state = {
//         good: 0,
//         neutral: 0,
//         bad: 0, 
//   }
  
//   onLeaveFeedback = (option) => {
//     this.setState(prevValue => ({
//       [option]: prevValue[option] + 1,
//         }))
//   }

//   countTotalFeedback = ({ good, neutral, bad }) => {
//     return good + neutral + bad
//   }

//   countPositiveFeedbackPercentage = ({ good }) => {
//     return Math.round(good * 100 / this.countTotalFeedback(this.state))
//   }


//   render() {
//     const { good, neutral, bad } = this.state;
//     const hasFeedback = good || neutral || bad;
//     return (
//     <>
//       <Section title="Please leave feedback">
//           <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
//       </Section>
//         <Section title='Statistic'>
//           {hasFeedback ?
//             <Statistic good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback({ good, neutral, bad })} positivePercentage={this.countPositiveFeedbackPercentage({ good })} />
//             : 
//           <Notification message="There is no feedback"></Notification>}
//       </Section>
//     </>
//   );
//   }
// };

// export default App
