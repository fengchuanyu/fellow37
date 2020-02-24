import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";

const Com1 = () => <h1>Com1</h1>
const Com2 = () => <h1>Com2</h1>

//自定义链接其实他就是一个函数组件
const MenuLink = ({to,label}) =>{
  return(
    <Route
      path={to}
      children={({match})=>{
        return(
          <div>
            {match?'>':""}
            <Link to={to} >{label}</Link>
          </div>
        )
      }}
    />
  )
}

export default class Page5 extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Page5</h1>
        <Router>
          <MenuLink to={this.props.match.path+'/com1'} label="com1" />|
          <MenuLink to={this.props.match.path+'/com2'} label="com2" />
          {/* <Route path="/page5/test" children={({match})=>(<Link to="/page5/test">test</Link>)} /> */}
          <Switch>
            <Route path={this.props.match.path+'/com1'} component={Com1}/>
            <Route path={this.props.match.path+'/com2'} component={Com2}/>
          </Switch>
        </Router>
      </div>
    )
  }
}
