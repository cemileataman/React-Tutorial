import {useContext } from "react";
import {useState } from "react";
import TaskCreate from "./TaskCreate";
import TasksContext from "../context/task";

function TaskShow({ task}) {
  const {deleteTaskById,editTaskById} = useContext(TasksContext);
  
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    // onDelete(task.id);
    deleteTaskById(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id,updatedTitle,updatedTaskDesc) => {
    setShowEdit(false);
    // onUpdate(id,updatedTitle,updatedTaskDesc);

    editTaskById(id,updatedTitle,updatedTaskDesc)
  };
  
  console.log(task.id);
  return (
    <div className="task-show">
      {showEdit ? ( //güncelleye tıkladığında 
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit}/>
        
      ) : (
        <div>
          <h3 className="task-title">Göreviniz</h3>
          <p>{task.title}</p>
          <h3 className="task-title">Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="task-delete" onClick={handleDeleteClick}>
              Sil
            </button>
            <button className="task-edit" onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
