import React from "react";
import './App.css';
import Home from "./hoc/Home/Home";
import Layout from "./hoc/Layout/Layout";
import PageBuilder from "./hoc/PageBuilder/PageBuilder";
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

function App() {
  return (
      <Layout>
        <Switch>
          <Route path='/'exact component={PageBuilder}/>
            <Route path='/Home'exact component={Home}/>
          <Redirect to='/'/>
        </Switch>
      </Layout>
  );
}

export default App;
