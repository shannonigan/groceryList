import React from "react";



const Grocery = ({ id, name, complete, handleClick, handleEditClick, handleDeleteClick }) => (
  <span>
    <br />
    <li
      key={id}
      style={complete ? { ...styles.grocery, ...styles.complete } : styles.grocery}
      onClick={() => handleClick(id)}
    >
      {name}
    </li>
    <button onClick={() => handleEditClick(id)}> Edit </button>
    <button onClick={() => handleDeleteClick(id)}> Delete </button>
  </span>

);

const styles = {
  grocery: {
    cursor: "pointer",
  },
  complete: {
    color: "gray",
    textDecoration: "line-through",
  }
};


export default Grocery;