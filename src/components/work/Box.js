import React, { Component } from 'react';

export default class Box extends Component {

  render() {
    const UIColors = ['#2ecc71', '#3498db', '#f1c40f', '#f1c40f', '#e67e22'];

    const boxStyle = {
      background: (()=>{
        const randomColorIndex = Math.floor((Math.random() * 10) % UIColors.length);
        console.log(randomColorIndex)
        console.log(UIColors.length)
        return UIColors[randomColorIndex];
      })(),
      height: '300px',
      flexGrow: (()=>{
          const randGrowFactor = Math.floor((Math.random()* 10) % 10);
          return randGrowFactor;
        }
      )(),
      marginRight: '10px',
      transition: 'background 0.5s ease'
    }

    return (
      <div style={boxStyle}>
        this is a box
      </div>
    )
  }

}
