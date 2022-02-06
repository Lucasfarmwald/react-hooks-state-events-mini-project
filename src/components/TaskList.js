import React from "react";
import Task from "./Task"

function TaskList(taskData) {



  return (
    <div className="tasks">
      <Task taskData={taskData} />
    </div>
  );
}

export default TaskList;
