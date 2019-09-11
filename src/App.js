import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import GroceryForm from './GroceryForm'



class App extends React.Component {
  state = {
    groceries: [
      { id: 1, name: "Fruit", complete: false, },
      { id: 2, name: "Mylk", complete: false, },
      { id: 3, name: "Granola", complete: false, },
    ],
  };


  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addItem = (name) => {
    const grocery = { id: this.getUniqId(), name, complete: false };
    this.setState({ groceries: [grocery, ...this.state.groceries] });
  };

  handleClick = (id) => {
    this.setState({
      groceries: this.state.groceries.map(grocery => {
        if (grocery.id === id) {
          return { ...grocery, complete: !grocery.complete, };
        }
        return grocery;
      })
    })
  };

  handleEditClick = (id) => {
    let grocery = this.state.groceries.filter(grocery => grocery.id === id)[0];
    let newName = prompt(`What would you like to change '${grocery.name}' to?`);
    // let newGrocery = newName => grocery.id !== id 

    this.setState({
      groceries: this.state.groceries.map(grocery => {
        if (grocery.id == id) {
          return { ...grocery, name: newName, };
        }
        return grocery;
      })
    })
  };

  handleDeleteClick = (id) => {
    this.setState({
      groceries: this.state.groceries.filter(grocery => {
        if (grocery.id != id) {
          return { ...grocery };
        }
      })
    })
  };

  renderGroceries = () => {
    return this.state.groceries.map(grocery =>
      <li key={grocery.id}> {grocery.name} </li>
    );
  };

  render() {
    return (
      <div className= "app">
        <br/>
        <br/>
        <br/>
        <h2 className= "head"> ~Grocery List~ </h2>
        <br/>
        <br/>
        <br/>
        <List
          name=""
          groceries={this.state.groceries}
          handleClick={this.handleClick}
          handleEditClick={this.handleEditClick}
          handleDeleteClick={this.handleDeleteClick} />
        <br/>
        <br/>
        <br/>
        
        <h3>Add Item:</h3>
        <GroceryForm addItem={this.addItem} />
      </div>
    );
  };
};
export default App;
