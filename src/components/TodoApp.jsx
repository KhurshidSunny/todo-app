import Form from "./Form";
import NavigateButtons from "./NavigateButtons";
import TodoList from "./TodoList";

export default function TodoApp() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 rounded-md w-full   px-8 py-8 mt-4 shadow-xl">
      <Form />
      <NavigateButtons />
      <TodoList />
    </div>
  );
}
