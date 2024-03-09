import Button from "./Button";

export default function NavigateButtons({ showCompleted, onToggle }) {
  return (
    <div className="mr-auto mt-5">
      <Button bgColor="green-500" onToggle={onToggle}>
        Todo
      </Button>
      <Button onToggle={onToggle}>Completed</Button>
    </div>
  );
}
