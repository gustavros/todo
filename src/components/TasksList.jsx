import { Trash } from "phosphor-react";
import React from "react";
import clipboard from "/src/assets/images/clipboard.png";

export const TasksList = ({ handleTask, handleChangeTask }) => {
  
  function handleDeleteTask(id) {
    const newTasks = handleTask.filter((task) => task.id !== id);
    handleChangeTask(newTasks);
  }

  const hasTask = handleTask.length > 0;

  return (
    <div className="w-full">
      {!hasTask ? (
        <div className="border-t-2 rounded-lg p-4 m-4 border-[#333333] flex flex-col justify-center items-center gap-4">
          <img
            src={clipboard}
            alt="Imagem de uma prancheta"
            className="pt-20"
          />
          <p className="text-[#808080]">
            <span className="font-bold ">
              Você ainda não tem tarefas cadastradas
            </span>
            <br />
            <span className="font-normal">
              Crie tarefas e organize seus itens a fazer
            </span>
          </p>
        </div>
      ) : (
        <>
          {handleTask.map((task) => {
            return (
              <div
                key={task.id}
                className="bg-[#262626] flex items-center justify-between m-4 p-4 gap-4 rounded-lg transi"
              >
                <input type="checkbox" name="" id="" />
                <p>{task.title}</p>

                <Trash
                  size={30}
                  className="cursor-pointer hover:bg-[#333333] hover:text-[#E25858] rounded-lg p-1 transition-colors"
                  onClick={() => handleDeleteTask(task.id)}
                />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
