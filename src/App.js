import React, { Component } from "react";
import Force from "./components/Force";
import Crime from "./components/Crime_categories";
import './bootstrap.min.css'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      showCrime: true,
      showPolice: true,
      dashboard: false,

    };
    /*======== below all function are bind in that form  ============== */
    this.shownDashboard = this.shownDashboard.bind(this)
    this.shownPolice = this.shownPolice.bind(this)
    this.shownCrime = this.shownCrime.bind(this)
    /*======== all function are bind in that form ============== */
  }
  shownCrime() {
    return (
      this.setState({
        showCrime: false,
        showPolice: true
      })
    )
  }
  shownPolice() {
    return (
      this.setState({
        showCrime: true,
        showPolice: false
      })
    )
  }
  shownDashboard() {
    return (
      this.setState({
        showCrime: false,
        showPolice: false,
        dashboard: true,
      })
    )
  }

  /*======================================================================================= */
  /*============ RENDER METHOD (STATELESS METHOD (RENDER K LIYE USE HOTA HAIN))============ */
  renderDashboard() {
    return (
      <div>
        <h1>Hello! Adnan Ahmed</h1>
      </div>
    )
  }
  /*======================================================================================= */
  renderCrime() {
    return (
      <div>
        <Crime />
      </div>)
  }
  /*======================================================================================= */
  renderForce() {
    return (
      <div>
        <Force />
      </div>
    )
  }
  /*======================================================================================= */

  render() {
    const { showCrime, showPolice } = this.state // destructing method ( this.state se phele = aur {} curly brace mein state define karte hain)
    // console.log(showCrime)
    return (
      <div id="wrapper" className="toggled">

      <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
              <li className="sidebar-brand">
                  <a href="javaScript:void(0)">
                      REACT ASSIGNMENT #8
                  </a>
              </li>
              <li>
                  <a href="javascript:void(0)" onClick={this.shownDashboard}>Dashboard</a>
              </li>
              <li>
                  <a id="name" onClick={this.shownCrime}>Show Crime Details</a>
              </li>
              <li>
                  <a id="name" onClick={this.shownPolice}>Show Police Details</a>
              </li>
          </ul>
      </div>
        <div className='container'>
          <div className='' >
            <br />
            {!showCrime && !showPolice && this.renderDashboard()}
            {!showPolice && showCrime && this.renderForce()}
            {!showCrime && showPolice && this.renderCrime()}

          </div>
        </div>
      </div>
    );
  }
}

export default App;
