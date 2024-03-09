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
        {allTasks.length > 0
          ? allTasks?.map((task) => (
              <TodoTask
                task={task}
                onDeleteTask={onDeleteTask}
                onAddToCompleted={onAddToCompleted}
                showCompleted={showCompleted}
                key={task.id}
              />
            ))
          : "Add tasks to your List 📜"}
      </ul>
    </div>
  );
}
