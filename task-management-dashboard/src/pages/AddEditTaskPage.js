
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createTask, updateTask } from "../services/api";

const AddEditTaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");

  useEffect(() => {
    if (id) {
      // Fetch task for editing
      fetchTask(id);
    }
  }, [id]);

  const fetchTask = async (taskId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`);
    const task = await response.json();
    setTitle(task.title);
    setDescription(task.description);
    setStatus(task.status);
  };

  const handleSubmit = () => {
    const taskData = { title, description, status };
    if (id) {
      updateTask(id, taskData).then(() => navigate("/"));
    } else {
      createTask(taskData).then(() => navigate("/"));
    }
  };

  return (
    <div style={{display:'flex',height:'300px', flexDirection:'column',justifyContent:'space-between', padding:'1rem'}}>
      <h2>{id ? "Edit Task" : "Add Task"}</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
};

export default AddEditTaskPage;
