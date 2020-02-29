import React, { Component } from 'react'
import store from '../store'

const addAction = (num) => {
  return{
    type:"ADD",
    step:num
  }
}
export default class Child1 extends Component {
  constructor(props){
    super(props)
    this.state={
      count:0
    }
  }
  addHandle(){
    store.dispatch(addAction(5));
    this.setState({
      count:store.getState().count
    })
  }
  render() {
    console.log("render")
    return (
      <div>
        <h1>{this.state.count}</h1>
        <h1>Child1 的页面</h1>
        <button onClick={this.addHandle.bind(this)}>add</button>
      </div>
    )
  }
}
