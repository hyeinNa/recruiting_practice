import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";// eslint-disable-line no-unused-vars

import Header from "./header";
import Main from "./views/main";
import Apply from "./views/apply";
import ApplyClosed from "./views/applyClosed";
import Assign from "./views/assign";

function App() {
  return (
    <div>
      <Header/>
      <div>
        <Route path="/" component={Main} exact={true} />
        <Route path="/apply" component={Apply} />
        <Route path="/applyClosed" component={ApplyClosed} />
        <Route path="/assign" component={Assign} />
      </div>
    </div>
  );
}


export default App;