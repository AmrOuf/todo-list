import React, {Component} from 'react'
import ItemsList from './ItemsList.js'
import AddItem from './AddItem.js'
import './App.css';
//import { ReactComponent } from '*.svg';

class App extends Component {
  state = {
    items: [
      /* {item: 'item1', id: 1},
      {item: 'item2', id: 2},
      {item: 'item3', id: 3} */
    ]
  };

  // This function adds the new item from the form to the state above
  addItem = (item) => {

    // Get the id of the last item and increment by one
    if(this.state.items.length === 0)
      item.id = 1;
    else
      item.id = this.state.items[this.state.items.length - 1].id + 1;
    
    let items = [...this.state.items, item];
    // console.log(3);

    this.setState({
      items: items
    });
  }

  deleteItem = (id) => {
    //console.log("id:", id);

    let items = this.state.items.filter((item) => {
      return (item.id !== id)
    });

    this.setState({
      items: items
    });
    
  }

  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <h1 className="mb-5">Todo List with <i>React.js</i></h1>
        </header>

        <ItemsList items={this.state.items} deleteItem={this.deleteItem} />
        <AddItem addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
