import React, { Component } from 'react';
import { Button, TextField, withStyles } from '@material-ui/core';

import logo from './logo.svg';
import './App.css';
import Map from './Map.js'


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});



class App extends Component {
  state={
    country: ""
  }
  handleSearch = ()=>{
    console.log(this.state.country)
  }
  handleChange =(country)=>{
    // console.log(props)
    // console.log()
    this.setState({country:country.target.value})
  }
  render() {
    const {classes} = this.props
    return (

      <div className="app">
        <link href='https://api.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css' rel='stylesheet' />
          <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="standard-name"
            label="Country"
            className={classes.textField}
            value={this.state.country}
            onChange={this.handleChange}
            margin="normal"
          />
          <Button variant="contained" className={classes.button} onClick={this.handleSearch}>
            Search
          </Button>
        </form>
        <Map />

      </div>
    );
  }
}

export default withStyles(styles)(App);
