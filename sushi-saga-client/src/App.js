import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      sushis: [],
      startingIndex: 0,
      eatenSushi: [],
      budget: 100
    }
  }


  componentDidMount(){
    fetch(API)
    .then(r => r.json())
    .then(data => {
      const sushiData = data.map(sushi => {
        sushi.eaten = false
        return sushi
      })
      this.setState({sushis: sushiData})
    })
  }


  fourMoreSushis(){
    return this.state.sushis.slice(this.state.startingIndex, this.state.startingIndex + 4)
  }
 

  handleMoreButton = (event) => {
    this.setState({startingIndex: this.state.startingIndex + 4})
  }
  
  payFor = (sushi) => {
    const wallet = this.state.budget
    this.setState({budget: wallet - sushi.price})

  }

  handleEatSushi = (event) => { 
    this.state.sushis.forEach(sushi => {
      if (sushi.id == event.target.id && this.state.budget >= sushi.price){
        sushi.eaten = true
        this.payFor(sushi)
        const eatenArr = this.state.eatenSushi
        eatenArr.push(sushi)
        this.setState({eatenSushi: eatenArr})
      } 
    })
  }


  render() {
    return (
      <div className="app">
        <SushiContainer handleEatSushi={this.handleEatSushi} sushis={this.fourMoreSushis()} handleMoreButton={this.handleMoreButton} />
        <Table budget={this.state.budget} eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;