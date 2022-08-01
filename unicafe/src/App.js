import { useState } from 'react'

const Button = ({handle, text})=>{
  return (
    <button onClick = {handle}>{text}</button>
  )
}

const Display = ({rating,value,all}) => {  
  return (
    <tr>
      <td>{rating}</td>
      <td>{value}</td>
    </tr>
    //<div>{rating} {value}</div>
  )
}

const Statistics = ({good,neutral,bad, all, avg, pos}) => {
  
  console.log({avg})
  if(all===0){
    return(
    <>
      <h1>statistics</h1>
      <div>No feedback given</div>
      </>
    )
  }
  return (
    
   <>
   <h1>statistics</h1>
   
    <Display rating = 'good' value = {good}/>
    <Display rating = 'neutral' value = {neutral}/>
    <Display rating = 'bad' value = {bad}/>
    <Display rating = 'all' value = {all}/>
    <Display rating = 'average' value = {avg}/>
    <Display rating = 'positive' value = {pos}/>
  
  </>  
  )
  
  
}
const App = () => {
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)
  const[avg, setAvg] = useState(0)

  let total = good+neutral+bad
  
  
  let averageScore = avg/total 
  let positivePercent = (good/total)*100 + ' %'
  const handleGood = () =>{
    
    setGood(good+1)
    setAvg(avg+1)
  }

  const handleNeutral = () => {
    setNeutral(neutral+1)
  }

  const handleBad = () => {
    setBad(bad+1)
    setAvg(avg-1)
  }

  if(total === 0){
    return(
    <div>
      <h1>give feedback</h1>
      <Button handle={handleGood} text = 'good'/>
      <Button handle={handleNeutral} text = 'neutral'/>
      <Button handle={handleBad} text = 'bad'/>
      <h1>statistics</h1>
      <div>No feedback given</div>
    </div>
    
    )
  }
  return(
    <div>
      <h1>give feedback</h1>
      <Button handle={handleGood} text = 'good'/>
      <Button handle={handleNeutral} text = 'neutral'/>
      <Button handle={handleBad} text = 'bad'/>
      <h1>statistics</h1>
      {/*<Statistics good = {good} neutral = {neutral} bad = {bad} all={total} avg = {averageScore} pos = {positivePercent}/>*/}
      <table>
      <Display rating='good' value={good}/>
      <Display rating='neutral' value={neutral}/>
      <Display rating='bad' value={bad}/>
      <Display rating ='all' value = {total}/>
      <Display rating = 'average' value={averageScore}/>
      <Display rating = 'positive' value = {positivePercent}/>  
      </table>
    </div>
  )
}

export default App;
