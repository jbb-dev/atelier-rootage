import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Html from './components/Html'
import Css from './components/Css'
import Js from './components/Js'


function App() {
  return (
    <>
    <Header />
    <Switch>
        <Route exact  path='/' component={Home} />
        <Route path='/html' component={Html} />
        <Route path='/css' component={Css} />
        <Route path='/js' component={Js} />
    </Switch>
    </>
  )}

export default App;
