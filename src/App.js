import React from 'react';
import BubbleChart from './components/BubbleChart';
import Graph from './components/Graph';
//import Graph from './components/Graph';
import "./App.css"

export default function App() {
  return <>
    <h1 className='heading'>Chart Example from Apex Chart</h1>

    <div className='container'>
      <BubbleChart />
      <Graph />
    </div>
  </>;
}
