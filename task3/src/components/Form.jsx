import React from 'react'
import { useState } from "react";

function Form(props) {

    const [name, setName] = useState([]);

    // setName([...name, {id: , , }])

    function handleSubmit(event) {
        event.preventDefault();
        props.addTask("task added")
        setName("");
    }

    function handleChange(event) {
        
        setName(event.target.value)
       
      }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' name='text' autoComplete='off' value={name} onChange={handleChange} />
            <button type='submit' >Add</button>
        </form>

    </div>
  )
}

export default Form