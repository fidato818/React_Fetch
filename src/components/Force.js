import React, { Component } from "react";
import loading from "../WelldocumentedRevolvingBass-small.gif";
class Force extends Component {
  constructor() {
    super();
    this.state = {
      // list: [{
      //   id: 'hello world',
      //   name: 'adnan'
      // }, {
      //   id: 'shazam',
      //   name: 'billy boston '
      // }],
      list: [],
      result: [],
      textSearch: "",
      isloading: true
    };
  }
  componentDidMount() {
    this.getApiData();
  }

  getApiData() {
    fetch("https://data.police.uk/api/forces")
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
  onchange(e) {
    const { list } = this.state;
  }
  search(e) {
    const { list } = this.state; // destructing method ( this.state se phele = aur {} curly brace mein state define karte hain)
    const textSearch = e.target.value;
    // console.log(list)
    const result = list.filter(elem => {
      // return elem.name.substring(0, textSearch.length).toUpperCase() == textSearch.toUpperCase()
      return elem.name.toLowerCase().indexOf(textSearch) >= 0;

      // return console.log(elem)
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
    // return (
    //   <div className=''>

    //     <input className='form-control' placeholder="Force Categories by Name..." onChange={this.search.bind(this)} /><br/>
    //     {arr.map((elem, index) => {
    //       return (
    //         <div key={index} className="card a">
    //           <div className="card card-header text-center q"><b>{elem.id}</b></div>
    //           <div className="card card-body">{elem.name}</div>
    //         </div>

    //       );
    //     })}

    //           {isloading && <img width='100%' height='600px' src={loading}/>}
    //   </div>
    // );
    return (
      <div>
        {}
        <input
          className="form-control"
          placeholder="Force Categories by Name..."
          onChange={this.search.bind(this)}
        />{" "}
        <br />
        <div className="d-flex flex-wrap">
          {arr.map((elem, index) => {
            return (
              <div>
                <div>
                  <div
                    key={index}
                    style={{
                      height: "120px",
                      width: "250px",
                      margin: "8px",
                      marginBottom: "20px"
                    }}
                  >
                    <div className="card card-header text-center bg-secondary">
                      <b>{elem.id}</b>
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

export default Force;
