import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Main } from './src/components';
import configureStore from './src/store';

// Normal Redux | Redux Thunk
// const store = configureStore();

// Redux Saga
const store = configureStore;

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Main/>
      </Provider>
    );
  }
}

export default App;
