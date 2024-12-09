import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskListPage from "./pages/TaskListPage.js";
import TaskDetailsPage from "./pages/TaskDetailsPage.js";
import AddEditTaskPage from "./pages/AddEditTaskPage.js";
import { TaskProvider } from "./components/context/TaskContext"; 
function App() {
  return (
    <TaskProvider>
    <Router>
      <Routes>
        <Route path="/" element={<TaskListPage />} />
        <Route path="/task/:id" element={<TaskDetailsPage />} />
        <Route path="/add-edit/:id?" element={<AddEditTaskPage />} />
      </Routes>
    </Router>
    </TaskProvider>
  );
}

export default App;
