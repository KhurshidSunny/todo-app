export default function InputEl({ title, placeholder }) {
  return (
    <div className="flex flex-col">
      <label>{title}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="px-3 py-2 rounded-md mt-2 w-full"
      />
    </div>
  );
}
