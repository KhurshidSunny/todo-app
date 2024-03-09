import Button from "./Button";

export default function NavigateButtons({ showCompleted, onToggle }) {
  return (
    <div className="mr-auto mt-5">
      <Button bgColor={!showCompleted ? `green-500` : ""} onToggle={onToggle}>
        Todo
      </Button>
      <Button bgColor={showCompleted ? `green-500` : ""} onToggle={onToggle}>
        Completed
      </Button>
    </div>
  );
}
