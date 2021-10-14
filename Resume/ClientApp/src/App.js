import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Education } from './components/Education';
import { AboutMe } from './components/AboutMe';
import { Work } from './components/Work';
import './custom.css'




export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/aboutme' component={AboutMe} />
        <Route path='/education' component={Education} />
        <Route path='/work' component={Work} />
      </Layout>
    );
  }
}
