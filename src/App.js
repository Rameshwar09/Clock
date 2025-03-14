import React,{useState} from 'react'

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [Time,setTime] = useState(time);// useState contains two variables one is prasent info and next one is updated one.
  const UpdateTime=()=>{
    time = new Date().toLocaleTimeString();
    setTime(time);
  }
  setInterval(UpdateTime,1000)
  return (
    <div>
      <h1>{Time}</h1>
      {/* <button type='button' onClick={UpdateTime}>click</button> */}
    </div>
  )
}

export default App
