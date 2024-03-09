import InputEl from "./InputEl";

export default function Form() {
  return (
    <form className="flex items-center justify-center gap-4 px-4 py-2 pb-8 border-b-2 border-slate-700">
      <InputEl title="Title" placeholder="What's the title your todo" />

      <InputEl
        title="description"
        placeholder="what's the description of your todo"
      />

      <button className="bg-green-500 mt-auto px-4 font-semibold rounded-md py-2">
        Add
      </button>
    </form>
  );
}
