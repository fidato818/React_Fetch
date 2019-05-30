import React, { Component } from "react";
import loading from "../WelldocumentedRevolvingBass-small.gif";
import "../bootstrap.min.css";
// import "../App.css";
class Crime extends Component {
  constructor() {
    super();
    this.state = {
      // list: [{
      //   url: 'hemshire police station',
      //   name: 'hemshire police station',
      // }, {
      //   url: 'shazam',
      //   name: 'billy boston'
      // }, {
      //   url: 'Capitan Marvel',
      //   name: 'Cap Mar'
      // }, {
      //   url: 'Superman',
      //   name: 'Sup man'
      // }, {
      //   url: 'venom',
      //   name: 'Eddy Brock'
      // }, {
      //   url: 'Spidermen',
      //   name: 'peter parker'
      // }, {
      //   url: 'Batman',
      //   name: 'Bruce Wayne'
      // },],
      list: [],
      result: [],
      textSearch: "",
      isloading: true
    };
  }
  /*======================================================================================= */
  /*==============================(render hone k bad componentDidMount chalta hain)=============================== */
  /*==============================(koi api call karwani ho. 
        Initialiy koi function chalana hoto componentDidMount mein chalaen ge)=============================== */
  componentDidMount() {
    this.getApiData();
  }

  getApiData() {
    fetch("https://data.police.uk/api/crime-categories")
      .then(response => {
        return response.json();
      })
      .then(result => {
        return setTimeout(() => {
          this.setState({
            list: result,
            isloading: false
          });
        }, 2000);
      });
  }
  // onchange(e) {
  //   const { list } = this.state;
  // }
  /*=============================(Filter function return new array)=================================== */
  search(e) {
    const { list } = this.state;
    const textSearch = e.target.value;
    // console.log(list)
    const result = list.filter(elem => {
      // return elem.name.substring(0, textSearch.length).toUpperCase() == textSearch.toUpperCase()
      return elem.name.toLowerCase().indexOf(textSearch) >= 0;
    });
    this.setState({
      result,
      textSearch
    });
  }

  render() {
    const { list, textSearch, result, isloading } = this.state;
    const arr = textSearch.length ? result : list;
    console.log(result);
    console.log(arr);

    return (
      <div>
        {}
        <input
          className="form-control"
          placeholder="Crime Categories by Name..."
          onChange={this.search.bind(this)}
        />{" "}
        <br />
        <div className="d-flex flex-wrap">
          {arr.map((elem, index) => {
            return (
              <div>
                <div key={index}>
                  <div
                    style={{
                      height: "120px",
                      width: "250px",
                      marginRight: "10px"
                    }}
                  >
                    <div className="card card-header text-center bg-secondary">
                      <b>{elem.url}</b>
                    </div>
                    <div className="card card-body text-center ">
                      {elem.name}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {isloading && <img width="100%" height="600px" src={loading} />}
      </div>
    );
  }
}

export default Crime;
