import React from 'react';
import './App.css';
import Page1 from './views/Page1'
import Page2 from './views/Page2'
import Page3 from './views/Page3'
import Page5 from './views/Page5'
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
        <Link to="/page3/xiaob">page3</Link>|
        <Link to="/page4">page4</Link>|
        <MenuLink to="/page5" label="page5" />
        <Switch>
          <Route exact path="/">
            <Page1/>
          </Route>
          <Route path="/page2/:username" component={Page2}/>
          <Route path="/page3/:username" component={Page3}/>
          <Route path="/page4" render={()=>{
            return(<Redirect to="/"/>)
          }}/>
          <Route path="/page5" component={Page5}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;