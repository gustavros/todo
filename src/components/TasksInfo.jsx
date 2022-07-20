import React from "react";

export const TasksInfo = ({ tasks }) => {
  const hasTask = tasks.length;

  const hasDone = tasks.filter((task) => task.done).length; // ! fazendo o filtro para ver se tem alguma tarefa concluída, pegando o length da array de tarefas concluídas

  return (
    <div className="w-full">
      <div className="flex justify-between items-center p-4 m-4">
        <p className="text-[#F2BB16] font-bold text-sm">
          Tarefas criadas
          <span className="font-bold bg-zinc-800 text-white m-1 px-2 py-1 rounded-full">
            {hasTask}
          </span>
        </p>
        <p className="text-[#a2a2a2] font-bold text-sm">
          Concluídas
          <span className="font-bold bg-zinc-800 text-white m-1 p-1 rounded-full">
            {hasDone}
          </span>
        </p>
      </div>

      <div></div>
    </div>
  );
};
