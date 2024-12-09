import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TaskDetailsPage = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetchTask(id);
  }, [id]);

  const fetchTask = async (taskId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`);
    const task = await response.json();
    setTask(task);
  };

  return task ? (
    <div style={{padding:'1rem'}}>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Created on: {task.creationDate}</p>
      <button onClick={()=> navigate(`/add-edit/${task?.id}`)}>Edit Task</button>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default TaskDetailsPage;
