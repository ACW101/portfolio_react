import React from "react";
import Box from "./Box"

export default class Row extends React.Component {
  render() {
    const rowContainerStyle = {
      margin: '10px 0px',
      display: 'flex',
      flexDirection: 'row',
    }
    return (
      <div style={rowContainerStyle}>
        <Box />
        <Box />
        <Box />
      </div>
    )
  }
}
