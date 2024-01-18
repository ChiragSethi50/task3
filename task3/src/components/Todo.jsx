import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { colors } from "@mui/material";
import "./Todo.css";

function Todo(props) {
  return (
    <div className="Todo">








      <li>
        <div>
            <input id={props.id} type="checkbox" defaultChecked={props.completed} />
            <label htmlFor={props.id}>{props.name}</label>
        </div> 
        <div>
            <button type="button">Edit</button>
            <button type="button">Delete</button>
        </div>
      </li>
    </div>
  );
}

export default Todo;
