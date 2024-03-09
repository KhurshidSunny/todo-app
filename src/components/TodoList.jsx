import TodoTask from "./TodoTask";

export default function TodoList({
  tasks,
  completedTasks,
  onDeleteTask,
  onAddToCompleted,
  showCompleted,
}) {
  const allTasks = showCompleted ? completedTasks : tasks;
  return (
    <div className="flex  mr-auto  mt-5 w-full">
      <ul className=" flex flex-col w-full gap-2">
        {allTasks?.map((task) => (
          <TodoTask
            task={task}
            onDeleteTask={onDeleteTask}
            onAddToCompleted={onAddToCompleted}
            key={task.id}
          />
        ))}
      </ul>
    </div>
  );
}
