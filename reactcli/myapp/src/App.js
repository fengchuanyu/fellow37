import React from 'react';
import './App.css';
import Page1 from './views/Page1'
import Page2 from './views/Page2'
import Page3 from './views/Page3'
import Page5 from './views/Page5'
import Page6 from './views/Page6'
import Page7 from './views/Page7'
import Child1 from './views/Child1'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

const MenuLink = ({to,label}) => (
  <Route
    path={to}
    children={()=>{
      return(
        <div>
          <Link to={to}>{label}</Link>
        </div>
      )
    }}
  />
)

function App() {
  return (
    <div className = "App" >
      <Router>
        <Link to="/">page1</Link>|
        <Link to="/page2/xiaoming">page2</Link>|
        <Link to="/page2/child1">page2</Link>|
        <Link to="/page3/xiaob">page3</Link>|
        <Link to="/page4">page4</Link>|
        <MenuLink to="/page15" label="page15" />|
        <Link to="/page6">page6</Link>|
        <Link to="/page7">page7</Link>|

        <Switch>
          <Route exact path="/">
            <Page1/>
          </Route>
          
          <Route path="/page2/child1" component={Child1}/>
          <Route path="/page2/:username" component={Page2}/>
          <Route path="/page3/:username" component={Page3}/>
          <Route path="/page4" render={()=>{
            return(<Redirect to="/"/>)
          }}/>
          <Route path="/page15" component={Page5}/>
          <Route path="/page6" component={Page6}/>
          <Route path="/page7" component={Page7}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;