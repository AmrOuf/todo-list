import React, {Component} from 'react';
import ItemsList from './ItemsList.js'
import './App.css';
//import { ReactComponent } from '*.svg';

class App extends Component {
  state = {
    items: ['item1', 'item2', 'item3', 'item4']
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo List with <code>React.js</code></h1>
        </header>

        <ItemsList items={this.state.items} />
      </div>
    );
  }
}

export default App;
