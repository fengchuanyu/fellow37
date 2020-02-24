import React, { Component } from 'react'
import {
  withRouter
} from "react-router-dom";

const RouterChange = withRouter(({history})=>{
  // console.log(props)
  // function routerTo(){
  //   history.push("/page5")
  // }
  // return(
  //   <button onClick = {()=>routerTo()}>跳转到页面5</button>
  // )
  return(
    <button onClick = {()=>history.push("/page5")}>跳转到页面5</button>
  )
})
export default class Page1 extends Component {
  render() {
    return (
      <div>
        <h1>页面一</h1>
        <RouterChange/>
      </div>
    )
  }
}
