import React, { Component,useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const App =()=>{

  const [state,stateSet]
  =useState([

    {id:0,name:`assassin's creed unity`,price:4},
    {id:0,name:`assassin's creed rogue`,price:50},
    {id:0,name:`gta 5`,price:1},
    {id:0,name:`sniper elite`,price:60}
  ])

  return(
    <React.Fragment>
    {state
    .filter(item=>item.price<6)
    .map(
      ({name,price})=>
      <React.Fragment>
        <h1>{name}</h1>
        <h2>${price}</h2>
      </React.Fragment>
    )}
    </React.Fragment>
  )
}

render(<App />, document.getElementById('root'));
