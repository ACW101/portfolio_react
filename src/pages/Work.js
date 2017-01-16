import React from "react";
import Row from "../components/work/Row"

export default class Work extends React.Component {


  render() {
    const workPageStyle = {
      margin: '50px 60px'
    }
    return (
      <div style={workPageStyle}>
        <h1>Work</h1>
        <Row />
        <Row />
        <Row />
      </div>
    )
  }
}
