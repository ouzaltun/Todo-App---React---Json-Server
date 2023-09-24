import { useState } from "react";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskCreate({ task, taskformUpdate, onUpdate }) {
  const { createTask, editTaskById } = useContext(TasksContext);

  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");
  console.log(taskDesc);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskformUpdate) {
      onUpdate(task.id, title, taskDesc);
      // editTaskById(task.id, title, taskDesc);
    } else {
      // onCreate(title, taskDesc);
      createTask(title, taskDesc);
    }

    setTitle("");
    setTaskDesc("");
  };

  return (
    <>
      {" "}
      {taskformUpdate ? (
        <div>
          {" "}
          <div className="task-update">
            <h2>Lütfen Taskı Düzenleyiniz</h2>
            <form className="task-form">
              <label className="task-label">Başlığı Düzenleyiniz</label>
              <input
                value={title}
                onChange={handleChange}
                className="task-input"
                type="text"
              />
              <label className="task-label">Taskı Düzenleyiniz</label>
              <textarea
                onChange={handleTaskChange}
                value={taskDesc}
                className="task-input"
                rows={5}
              ></textarea>
              <button
                className="task-button update-button"
                onClick={handleSubmit}
              >
                Güncelle
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="task-create">
          <h2>Lütfen Task Ekleyiniz!</h2>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
              type="text"
            />
            <label className="task-label">Task Giriniz</label>
            <textarea
              onChange={handleTaskChange}
              value={taskDesc}
              className="task-input"
              rows={5}
            ></textarea>
            <button className="task-button" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default TaskCreate;
