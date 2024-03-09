import TodoApp from "./components/TodoApp";
import Header from "./components/header";

export default function App() {
  return (
    <main className=" flex flex-col items-center   my-10">
      <Header />
      <TodoApp />
    </main>
  );
}
