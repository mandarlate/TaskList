import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "@mui/material";

const TaskItem = ({ task, onDelete }) => {
  const handleDelete = () => {
    onDelete(task.id);
  };

  return (
    <Card style={{ margin: "10px", padding: "10px" }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <Link to={`/task/${task.id}`}>View Details</Link>
      <Button onClick={handleDelete}>Delete</Button>
    </Card>
  );
};

export default TaskItem;
