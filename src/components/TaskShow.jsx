import { useState } from "react";
import TaskCreate from "./TaskCreate";
import { useContext } from "react";
import TasksContext from "../context/task";

function TaskShow({ task }) {
  const { editTaskById, deleteTaskById } = useContext(TasksContext);

  const [showEdit, setshowEdit] = useState(false);

  const handleDeleteClick = () => {
    // onDelete(task.id);
    deleteTaskById(task.id);
  };
  const handelEditClick = () => {
    setshowEdit(!showEdit);
  };

  const handleSubmit = (id, uptatedTitle, updatedTaskDesc) => {
    setshowEdit(false);
    // onUpdate(id, uptatedTitle, updatedTaskDesc);
    editTaskById(id, uptatedTitle, updatedTaskDesc);
  };

  console.log(task);
  return (
    <div className="task-show">
      {showEdit ? (
        <>
          <TaskCreate
            task={task}
            taskformUpdate={true}
            onUpdate={handleSubmit}
          ></TaskCreate>
        </>
      ) : (
        <>
          {" "}
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.title}</p>
          <h4 className="task-title">Yapılacaklar</h4>
          <p>{task.taskDesc}</p>
          <div className="task-buttons">
            <button className="task-sil" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="task-guncel" onClick={handelEditClick}>
              Güncelle
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskShow;
