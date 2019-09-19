import React, {Component} from 'react'
import ItemsList from './ItemsList.js'
import AddItem from './AddItem.js'
import './App.css';
//import { ReactComponent } from '*.svg';

class App extends Component {
  state = {
    items: [
      {item: 'item1', id: 1},
      {item: 'item2', id: 2},
      {item: 'item3', id: 3}
    ]
  };

  // This function adds the new item from the form to the state above
  addItem = (item) => {
    
    //console.log(item);

    // Get the id of the last item and increment by one
    item.id = this.state.items[this.state.items.length - 1].id + 1;
    

    let items = [...this.state.items, item];
    console.log(items);

    this.setState({
      items: items
    });
    

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo List with <code>React.js</code></h1>
        </header>

        <ItemsList items={this.state.items} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
