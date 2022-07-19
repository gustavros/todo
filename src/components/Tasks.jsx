import { PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";

export const Tasks = ({ tasks, setTasks }) => {
  const inputRef = useRef(null);

  function addNewTask() {
    const newTask = {
      id: uuidv4(),
      title: inputRef.current.value,
      done: false,
    };

    setTasks([...tasks, newTask]);
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  return (
    <div className="flex justify-center items-center gap-4 p-4 w-full">
      <input
        ref={inputRef}
        type="text"
        placeholder="Adicione uma nova tarefa"
        className="rounded-lg w-[80%] p-4 placeholder:text-[#808080] bg-[#262626] outline-none border-2 border-[#0D0D0D]"
      />

      <button
        onClick={() => {
          addNewTask();
        }}
        className="flex gap-2 justify-center items-center p-4 bg-[#F2BB16] rounded-lg w-24 hover:bg-[#9c8615] transition-colors "
      >
        <span>
          <PlusCircle />
        </span>
        Criar
      </button>
    </div>
  );
};
