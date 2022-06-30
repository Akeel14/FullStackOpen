 import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)


  const handleBadClick = () => {
    setAll(allClicks + 1)
    setBad(bad + 1)
  }

  const handleGoodClick = () => {
    setAll(allClicks + 1)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks + 1)
    setNeutral(neutral + 1)

  }

  const Statistics = ({ good, neutral, bad, allClicks, average, positive }) => {
    return <div>
    <h2>Statistics</h2>

    {!allClicks ? (
      <div>No feedback given</div>
    ) : (
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={allClicks } />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={positive} />
        </tbody>
      </table>
    )}
  </div>
  }
  const StatisticLine = ({ text, value }) => (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
  
  
  const average = (good - bad) / allClicks;
  const positive = (allClicks ? (good * 100) / allClicks : 0) + " %";


  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      
      
      <Statistics good={good}
        neutral={neutral}
        bad={bad}
        allClicks ={allClicks}
        average={average}
        positive={positive}/>

    </div>
  )
}

export default App
