import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import Form from "./components/Form";
import Filter from "./components/Filter";


function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  
  const tasklist = props.tasks?.map((task) => (
    <Todo key={task.id} id={task.id} name={task.name} completed={task.completed} />
  ));

    function addTask(name) {
      alert(name);
    }

  return (
    <div className="App">
      <Navbar />

      <Form addTask={addTask} />
      <div>
        <Filter />
        {/* <Filter />
        <Filter /> */}
      </div>

      <ul>{tasklist}</ul>
    </div>
  );
}

export default App;
