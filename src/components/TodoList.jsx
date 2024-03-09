export default function TodoList() {
  return (
    <div className="flex  mr-auto  mt-5 w-full">
      <ul className=" flex flex-col w-full gap-2">
        <li className="flex justify-between px-4 py-4 bg-slate-800 rounded-md gap-2">
          {/* todo task content */}
          <div>
            <h2 className="text-2xl font-bold text-green-500 mb-2">
              Doing Workout
            </h2>
            <p className="text-sm font-sans text-slate-500">
              I have to do excercise at 6 PM
            </p>
          </div>

          {/* todo task icons */}
          <div className="flex justify-center items-center gap-4">
            <p className="text-xl cursor-pointer hover:bg-red-500 duration-150">
              🗑
            </p>
            <p className="text-xl cursor-pointer hover:bg-red-500 duration-150">
              ✔
            </p>
          </div>
        </li>

        <li className="flex justify-between px-4 py-4 bg-slate-800 rounded-md">
          {/* todo task content */}
          <div>
            <h2 className="text-2xl font-bold text-green-500 mb-2">
              Doing Workout
            </h2>
            <p className="text-sm font-sans text-slate-500">
              I have to do excercise at 6 PM
            </p>
          </div>

          {/* todo task icons */}
          <div className="flex justify-center items-center gap-4">
            <p className="text-xl cursor-pointer hover:bg-red-500 duration-150">
              🗑
            </p>
            <p className="text-xl cursor-pointer hover:bg-red-500 duration-150">
              ✔
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
