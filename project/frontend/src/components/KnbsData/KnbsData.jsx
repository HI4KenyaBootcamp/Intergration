import React, { Component } from "react";
import ReactDOM from 'react-dom';
//import React from 'react';
//import withStyles from "@material-ui/core/styles/withStyles";
//import classNames from "classnames";
//import PropTypes from "prop-types";
//import { NavLink } from "react-router-dom";



{/*class KnbsData extends Component {
  constructor(props) {
    super(props)
    this.state = {
      population: [],
    };
  }

  componentDidMount() {
    fetch('http://kenya.opendataforafrica.org/api/1.0/data/emxkej?time=&uiMode=allData&gender=1000000,1000010&age-group=1000000,1000010,1000020,1000030,1000040,1000050,1000060,1000070,1000080,1000090,1000100,1000110,1000120,1000130,1000140,1000150,1000160&frequencies=A')
      .then(results => {
        return results.json();
      }).then(data => {
        console.log(data);
        let population = data.results.map((data) => {
          return (
            <div key={data.gender}>
            </div>
          )
        })
        this.setState({ population: population.gender });
        console.log("state", this.state.population);

      })
  }
  render() {
    return (
      <div classNames="container1">
        <div classNames="container2">
          {this.state.population}

        </div>
      </div>

    )
  }
}


{/*export default class KnbsData extends React.Component {    
constructor(props) {
  super(props);
  this.state = {
    population: []
  };
}

KnbsData(){
  return $.getJSON('http://kenya.opendataforafrica.org/api/1.0/data/emxkej?time=&uiMode=allData&gender=1000000,1000010&age-group=1000000,1000010,1000020,1000030,1000040,1000050,1000060,1000070,1000080,1000090,1000100,1000110,1000120,1000130,1000140,1000150,1000160&frequencies=A')
  .then(function(data) {
    return data.results;
  });
}

render() {
  this.KnbsData().then(function(res){
    this.state = {population: res};
  });
  return (
    <div id="layout-content" className="layout-content-wrapper">
      <div className="panel-list">
        {this.state.population.map((item, i) =>{
          return(
            <h1>{item.name.first}</h1>
            <span>{item.cell}, {item.email}</span>
          )
        })}
      <div>
    </div>
      )


export default KnbsData;*/}