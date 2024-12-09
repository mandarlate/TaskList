import React, { useContext, useEffect, useState } from "react";
import { TaskContext } from "../components/context/TaskContext";
import { fetchTasks, deleteTask } from "../services/api";
import { Link } from "react-router-dom";
import TaskItem from "../components/TaskItem";

const TaskListPage = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchTasks()
      .then((response) => setTasks(response.data))
      .catch((error) => console.error("Error fetching tasks:", error));
  }, [setTasks]);

  console.log(tasks,'task')
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks by title"
        value={search}
        onChange={handleSearchChange}
      />
      <div style={{ display: "flex" }}>
        {["ToDo", "InProgress", "Completed"].map((status) => (
          <div key={status} style={{ flex: 1, padding: "20px" }}>
            <h2>{status}</h2>
            {filteredTasks
              // .filter((task) => task.status === status)
              .map((task) => (
                <TaskItem key={task.id} task={task} onDelete={deleteTask} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskListPage;
