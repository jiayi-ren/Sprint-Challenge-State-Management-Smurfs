import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import Smurf from "./Smurf";
import Item from "./Item";
import { SmurfContext } from "../contexts/SmurfContext";

const initialFormValues = {
  name: "",
  age:0,
  height:"",
  id:0,
}

class App extends Component {

  constructor(){
    super();
    this.state = {
      smurfs: [],
      form: false,
      formValues: {initialFormValues}
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res =>{
          // console.log(res.data)
          this.update(res.data)
      })
      .catch(err =>{
          console.log(err)
      })
  }

  get = () =>{
    axios
      .get("http://localhost:3333/smurfs")
      .then(res =>{
          // console.log(res.data)
          this.update(res.data)
      })
      .catch(err =>{
          console.log(err)
      })
  }

  update = data =>{
    this.setState({
      ...this.state,
      smurfs : data,
    })
  }

  openForm = event =>{
    event.preventDefault()
    this.setState({
      ...this.state,
      form: true,
    })
  }

  closeForm = () =>{
    this.setState({
      ...this.state,
      form: false,
    })
  }

  onInputChange = event =>{
    this.setState({
      ...this.state,
      formValues:{
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    })
  }

  render() {
    return (
      <div className="App">
        {/* <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}
        <SmurfContext.Provider value={{formValues:this.state.formValues,onInputChange:this.onInputChange, get:this.get, close:this.closeForm}}>
          
          <button onClick={this.openForm}>New Smurf</button>
          {this.state.form && <Smurf />}
        </SmurfContext.Provider>
        {this.state.smurfs.map( smurf =>{
          return(
            <Item key={smurf.id} smurf={smurf} />
          )
        })}
      </div>
    );
  }
}

export default App;
