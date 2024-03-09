export default function TodoTask({ task, onDeleteTask }) {
  return (
    <li className="flex justify-between px-4 py-4 bg-slate-800 rounded-md gap-2">
      {/* todo task content */}
      <div>
        <h2 className="text-2xl font-bold text-green-500 mb-2">{task.title}</h2>
        <p className="text-sm font-sans text-slate-500">{task.description}</p>
      </div>

      {/* todo task icons */}
      <div className="flex justify-center items-center gap-4">
        <p
          className="text-xl cursor-pointer hover:bg-red-500 duration-150"
          onClick={() => onDeleteTask(task.id)}
        >
          🗑
        </p>
        <p className="text-xl cursor-pointer hover:bg-red-500 duration-150">
          ✔
        </p>
      </div>
    </li>
  );
}
