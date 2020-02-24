import React, { Component } from 'react'
import {
  Prompt
} from "react-router-dom";

export default class Page6 extends Component {
  constructor(props){
    super(props)
    this.state={
      inVal:""
    }
  }
  changeVal(e){
    this.setState({
      inVal:e.target.value
    })
  }
  render() {
    return (
      <div>
        <Prompt 
        when={this.state.inVal === ""?false:true} 
        message="确定要离开？"
        />
        <input type="text" onChange={this.changeVal.bind(this)}/>
      </div>
    )
  }
}
