import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/LandingPage';
import Add from './components/Add';
import Detail from './components/Detail';
import Update from './components/Update';
import React, { Component } from 'react';
import {BrowserRouter, Route,Routes} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/add" element = {<Add />} />
            <Route path="/details/:id" element={<Detail />} />
            <Route path="/update/:id" element={<Update />} />
          </Routes>
        </BrowserRouter>
    )
  }
}

export default App;
