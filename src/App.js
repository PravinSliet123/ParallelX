import logo from './logo.svg';
import './App.css';
//import Counter from './Counter/Counter';
//import Quotes from './RandomQuotes/Quotes';
//import DigitalClock from './Digital Clock/DigitalClock';
//import StopWatch from './StopWatch/StopWatch';
import Todo from './Todo/Todo'
import Detail from './Todo/Detail'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import Context from './Todo/Context';
import PropMain from './ContextApi/Props/PropsMain'
import Main from './ContextApi/ContextAPI/Main'
//import Context from './ContextApi/ContextAPI/Context';
import UseEffe from './Hooks/UseEffe';
import UseMemon from './Hooks/UseMemon';
import Circle from './Circle';
import Demo from "./demo"
import orgin from "./orgin.json"
import { useEffect, useState } from 'react';
import ParallelX from './ParallelX';
// import PoseAnalysis from "./PoseAnalysis"
// import ScheduleFun from "./Schedule"
import ScheduleFun from './ScheduleFun';
import AnimatedCursor from 'react-animated-cursor';

function App() {

  const [dayStartFrom, setdayStartFrom] = useState(0)
  const [dayStopTo, setdayStopTo] = useState(20)

  useEffect(() => {
    setTimeout(() => {
      setdayStartFrom(2)
      setdayStopTo(16)
    }, 1000);
  }, [])


 useEffect(()=>{
  const cursor = document.getElementById('cursor')

  window.addEventListener("mousemove", (e) => {
    if(cursor)
    {
      // if(e.pageX <=0 || e.pageY<=0)
      // {
      //   cursor.style.opacity = 0

      // }
      // else
      // {
      //   cursor.style.opacity = 1

      // }
      cursor.style.left= `${e.pageX+4}px`
      cursor.style.top = `${e.pageY+4}px`
    }
  })
 },[])

  return (
    <div className="App">
      {/* <PoseAnalysis/> */}
      {/* <ScheduleFun key={dayStartFrom.toString()+dayStopTo.toString()} dayStopTo={dayStopTo} dayStartFrom={dayStartFrom} /> */}
      {/* <div className="cursor" id='cursor'></div> */}
      <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: 'rgba(255, 99, 71,0.8)',
        boxShadow:"0px 0px 8px 2px rgb(255, 99, 71)"
      }}
      outerStyle={{
        border: '2px solid #fff',
        backgroundColor:"rgba(0,0,0,0.1)"
      }}
      />
      <ParallelX />

      {/* <div style={{height:"80vh", width:"100%"}}></div> */}
    </div>
  );
}

export default App;
