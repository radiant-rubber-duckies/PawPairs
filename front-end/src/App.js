import React, { Component } from 'react';
import './App.css';

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
        <h1>PAWPAIRS</h1>
        <h4>
          A place to find or offer short-term pet care, neighbor to neighbor
        </h4>
      </div>
    );
  }
}

export default App;
