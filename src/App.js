import React, {Fragment, useState} from "react";
import Title from "./components/title"
import TaskList from "./components/tasks"
import TaskStatus from "./components/taskStatus";

const App = () => {

  const [text, setText] = useState("");

  const textChangeHandler = event => {
    event.persist()
    setText(event.target.value)
  }

  const [tasks,setTask] = useState([
  {
    text:"Buy Vegetables",
    isComplete: false
  },
  {
    text:"Read News",
    isComplete: false
  },
  {
    text:"Get Supply",
    isComplete: false
  }
  ]);

  const addTask = () => {
      const newTask = {
        text,
        isComplete:false
      };
    setTask([...tasks, newTask])
    setText("")
  }

  const toggleTask = index => {
    setTask(
      tasks.map((task, taskIndex) => {
        if(index === taskIndex) {
          return {
            ...task,
            isComplete: !task.isComplete
          }
        }
        return task;
      })
    )
  }

  
  return (
    <Fragment>
    <Title />
    <input
      type="text"
      placeholder="Add a task"
      value = {text}
      onChange = {textChangeHandler}
      />
    <button onClick = {addTask}>Add</button>
    <TaskList tasks={tasks} toggleTask={toggleTask}/>
    <TaskStatus tasks={tasks}/>
      </Fragment>
  )
}

export default App;