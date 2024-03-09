import TodoTask from "./TodoTask";

export default function TodoList({ tasks, onDeleteTask }) {
  return (
    <div className="flex  mr-auto  mt-5 w-full">
      <ul className=" flex flex-col w-full gap-2">
        {tasks.map((task) => (
          <TodoTask task={task} onDeleteTask={onDeleteTask} key={task.id} />
        ))}
      </ul>
    </div>
  );
}
