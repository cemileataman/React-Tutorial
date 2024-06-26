import { useState } from "react";
import TasksContext from "../context/task";
import {useContext } from "react";

function TaskCreate({ task, taskFormUpdate,onUpdate}) {

  const {createTask,editTaskById} = useContext(TasksContext);

  const [title, setTitle] = useState(task ? task.title :'');
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc :'');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault(); //Sayfayı yenileme
    // setTaskDesc(event.ta rget.value);
    if(taskFormUpdate){
       onUpdate(task.id,title,taskDesc)
      // editTaskById(task.id,title,taskDesc);
    }
    else{
      // onCreate(title, taskDesc);
      createTask(title, taskDesc);
    }
   
    setTitle('');
    setTaskDesc('');
  };
  return (
    <div>
      {' '}
      {taskFormUpdate ? (
        <div className="task-update">
          <h3>Lütfen Task Düzenleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlığı Düzenleyiniz</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Taskı Düzenleyiniz</label>
            <textarea value={taskDesc} onChange={handleTaskChange} rows={5} />
            <button className="task-button update-button" onClick={handleSubmit}>
              Düzenle
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Ekleyiniz!</h3>
          <form className="task-form">
            <label className="task-label">Başlık</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Task Giriniz</label>
            <textarea value={taskDesc} onChange={handleTaskChange} rows={5} />
            <button className="task-button" onClick={handleSubmit}>
              Oluştur
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
