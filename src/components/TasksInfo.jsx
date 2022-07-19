import React from "react";

export const TasksInfo = ({ tasks }) => {
  const hasTask = tasks.length

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
            0
          </span>
        </p>
      </div>

      <div></div>
    </div>
  );
};
