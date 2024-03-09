export default function Button({ children, bgColor, onToggle }) {
  return (
    <button
      className={`bg-${bgColor} mt-auto px-4 font-semibold  rounded-md  py-2`}
      onClick={onToggle}
    >
      {children}
    </button>
  );
}
