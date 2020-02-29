import React, { Component } from 'react'
import {connect} from "react-redux"
import store from '../store'

const addAction = (num) => {
  return{
    type:"ADD",
    step:num
  }
}
 class Page8 extends Component {
  addHandle(){
    console.log(store)
    this.props.add(10);
  }
  render() {
    return (
      <div>
        <h1>Page8</h1>
        <h1>{this.props.count}</h1>
        <h1>{store.getState().count}</h1>
        <button onClick={this.addHandle.bind(this)}>add</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  count:state.count
})

const mapDispatchToProps =(dispatch)=>{
  return{
    add:(num)=>dispatch(addAction(num))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Page8)
