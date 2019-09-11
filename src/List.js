import React from "react";
import Grocery from "./Grocery"
import './App.css'

const List = (props) => (
  <div className="groceries">
    <h2> {props.name} </h2>
    <ul>
      { props.groceries.map( item => <Grocery {...item} handleClick={props.handleClick} handleEditClick={props.handleEditClick} handleDeleteClick={props.handleDeleteClick}/>)}
    </ul>
  </div>
);

export default List;