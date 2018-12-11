// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css';

import App from './pages/App'
// import Home from '../components/Home'
import About from './pages/about'
import User from './pages/User'
import GroupInsurance from './pages/GroupInsurance'
// import Features from '../components/Features'

ReactDOM.render(
    <Router>
    <div>
      {/* <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/about">关于</Link>
        </li>
      </ul> */}

      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/user" component={User}></Route>
        <Route path="/group-insurance" component={GroupInsurance}></Route>
      </Switch>
    </div>
  </Router>,
  document.getElementById('root')
) 
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
