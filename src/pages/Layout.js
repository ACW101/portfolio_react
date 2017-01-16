import React from "react";

import Nav from "../components/layout/Nav"
import "./Layout.css"

export default class Layout extends React.Component {

  render() {
    return (
      <div id="body-wrapper">
        <div id="header-nav-wrapper">
          <Nav />
        </div>
        <div id="content-wrapper">
          {this.props.children}
        </div>
      </div>
    )
  }
}
