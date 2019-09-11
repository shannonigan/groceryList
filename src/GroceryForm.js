import React from "react";

class GroceryForm extends React.Component {
  state = { name: "",  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.name);
    this.setState({ name: "", });
  };

  handleChange = (e) => {
    this.setState({ name: e.target.value, });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        required
        placeholder="Add an item"
        name="name"
        value={this.state.name}
        onChange={this.handleChange}
        />
      </form>
    );
  };
};

export default GroceryForm;