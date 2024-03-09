import Button from "./Button";

export default function Form({
  title,
  description,
  onSetTitle,
  onSetDescription,
  onAddTask,
}) {
  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !description) return;
    const newTask = {
      id: crypto.randomUUID(),
      title,
      description,
    };

    onAddTask(newTask);
  }
  return (
    <form
      className="flex items-center justify-center gap-4 px-4 py-2 pb-8 border-b-2 border-slate-700"
      onSubmit={handleSubmit}
    >
      {/* input for title */}
      <div className="flex flex-col">
        <label>Title</label>
        <input
          value={title}
          onChange={(e) => onSetTitle(e.target.value)}
          type="text"
          placeholder="what's the title"
          className="px-3 py-2 rounded-md mt-2 w-full text-black"
        />
      </div>

      {/* input for description */}
      <div className="flex flex-col">
        <label>Description</label>
        <input
          value={description}
          onChange={(e) => onSetDescription(e.target.value)}
          type="text"
          placeholder="what's the description"
          className="px-3 py-2 rounded-md mt-2 w-full text-black"
        />
      </div>

      <Button bgColor="green-500">Add</Button>
    </form>
  );
}
