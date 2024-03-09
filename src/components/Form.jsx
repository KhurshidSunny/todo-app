import Button from "./Button";
import InputEl from "./InputEl";

export default function Form() {
  return (
    <form className="flex items-center justify-center gap-4 px-4 py-2 pb-8 border-b-2 border-slate-700">
      <InputEl title="Title" placeholder="What's the title" />

      <InputEl title="description" placeholder="what's the description" />

      <Button bgColor="green-500">Add</Button>
    </form>
  );
}
