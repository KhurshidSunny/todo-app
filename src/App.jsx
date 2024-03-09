import TodoApp from "./components/TodoApp";
import Header from "./components/header";

export default function App() {
  return (
    <main className=" flex flex-col items-center border border-yellow-500 my-10">
      <Header />
      <TodoApp />
    </main>
  );
}
