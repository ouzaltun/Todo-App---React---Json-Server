import { useEffect, useState } from "react";
import { createContext } from "react";
import axios, { Axios } from "axios";
const TasksContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDesc,
    });
    console.log(response);
    const createdTasks = [...tasks, response.data];
    setTasks(createdTasks);
  };
  const fetchTask = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  };
  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };

  const editTaskById = async (id, uptatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: uptatedTitle,
      taskDesc: updatedTaskDesc,
    });
    const uptatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id: id, title: uptatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(uptatedTasks);
  };
  const sharedValuesAndMethods = {
    tasks,
    createTask,
    fetchTask,
    deleteTaskById,
    editTaskById,
  };
  return (
    <TasksContext.Provider value={sharedValuesAndMethods}>
      {children}
    </TasksContext.Provider>
  );
}

export { Provider };
export default TasksContext;
