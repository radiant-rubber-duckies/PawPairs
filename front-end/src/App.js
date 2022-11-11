import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Search from './Components/Search';

class App extends Component {
  state = {
    data: null,
  };

  componentDidMount() {
    this.callBackendAPI()
      .then((res) => this.setState({ data: res.express }))
      .catch((err) => console.log(err));
  }
  // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    );
  }
}

export default App;
