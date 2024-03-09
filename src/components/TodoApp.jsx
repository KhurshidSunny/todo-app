import { useState } from "react";
import Form from "./Form";
import NavigateButtons from "./NavigateButtons";
import TodoList from "./TodoList";

const initialTasks = [
  { id: 1, title: "go to gym", description: "workout at 8 PM" },
  { id: 2, title: "complete Assignment", description: "do all react projects" },
];

export default function TodoApp() {
  const [tasks, setTaks] = useState(initialTasks);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //   add new task
  function handleAddTask(newTask) {
    setTaks((tasks) => [...tasks, newTask]);
    setTitle("");
    setDescription("");
  }

  // Delete a task
  function handleDeleteTask(id) {
    setTaks((tasks) => tasks.filter((task) => task.id !== id));
  }

  console.log(tasks);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 rounded-md w-full   px-8 py-8 mt-4 shadow-xl">
      <Form
        title={title}
        onSetTitle={setTitle}
        onSetDescription={setDescription}
        description={description}
        onAddTask={handleAddTask}
      />
      <NavigateButtons />
      <TodoList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}
