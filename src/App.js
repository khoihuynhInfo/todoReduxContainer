import React, { Component } from 'react';
import Footers from './components/Footers';
import AddTodoContainer from './containers/AddTodoContainer';
import TodoListContainer from './containers/TodoListContainer';
class App extends Component {
  appstyle = {
    padding: '20px',
  }
  render() {
    return (
      <div style={this.appstyle}>
        <AddTodoContainer />
        <TodoListContainer />
        <Footers />
      </div>
    );
  }
}

export default App;
