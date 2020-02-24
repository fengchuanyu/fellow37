import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

const Com1 = () => <h1>Com1</h1>
const Com2 = () => <h1>Com2</h1>

export default class Page7 extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Page5</h1>
        <Router>
          <NavLink isActive={()=>false} activeStyle={{color:'red',fontSize:'30px'}} activeClassName="aa" to={this.props.match.path+'/com1'}>com1</NavLink>
          <NavLink activeClassName="aa" to={this.props.match.path+'/com2'}>com2</NavLink>
          <Switch>
            <Route path={this.props.match.path+'/com1'} component={Com1}/>
            <Route path={this.props.match.path+'/com2'} component={Com2}/>
          </Switch>
        </Router>
      </div>
    )
  }
}
