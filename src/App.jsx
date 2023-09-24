import "./App.css";
import { useEffect, useState } from "react";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import axios, { Axios } from "axios";
import { useContext } from "react";
import TasksContext from "./context/task";
function App() {
  const { fetchTask } = useContext(TasksContext);

  useEffect(() => {
    fetchTask();
  }, []);

  return (
    <>
      <TaskCreate></TaskCreate>
      <h1>Görevler</h1>
      <TaskList></TaskList>
    </>
  );
}

export default App;
