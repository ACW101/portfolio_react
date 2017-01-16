import React, { Component } from 'react';
import { IndexLink, Link } from "react-router";

import "./Nav.css";

export default class Nav extends Component {
  render() {
    return(
      <div id="header-nav">
        <a id="logo" href="#"></a>
        <ul id="nav">
          <li>
            <IndexLink to="/">Home</IndexLink>
          </li>
          <li>
            <Link to="resume">Resume</Link>
          </li>
          <li>
            <Link to="work">Work</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
        <button id="close" onclick="closeNav()">X</button>
    </div>
    )
  }
}

// render() {
//   // Content passed in via props
// const Example = (props) => {
//   return (
//     <p>This is a tooltip <TooltipTrigger tooltip={TooltipContent}>example</TooltipTrigger>!</p>
//   );
// }
//
// // Content passed in as children (Preferred)
// const PreferredExample = (props) => {
//   return (
//     <p>
//       This is a <a href="#" id="TooltipExample">tooltip</a> example.
//       <Tooltip target="TooltipExample">
//         <TooltipContent/>
//       </Tooltip>
//     </p>
//   );
// }
//  }
