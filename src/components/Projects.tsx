import * as Modal from "@radix-ui/react-dialog";
import { CaretCircleLeft } from "phosphor-react";
import ProjetctCard from "./ProjetctCard";
import projects from "../services/projects";
import { useEffect, useState, useRef } from "react";

const Projects = () => {
  const technologies = ["React", "Node Js", "SQLite", "TypeScipt"];

  const [projectNumber, setProjectNumber] = useState<number>(0);
  useEffect(() => {
    setProjectNumber((value) =>
      projects.length === 0
        ? 0
        : value === projects.length - 1
        ? 0
        : (value += 1)
    );
  }, []);

  const handleTopWindow = () => {
    document.body.scrollTop;
    document.documentElement.scrollTop;
    window.scroll(0, 0);
    window.scrollTo(0, 0);
  };
  return (
    <Modal.Root>
      <Modal.Trigger
        onClick={handleTopWindow}
        className="group bg-black border border-slate-500 rounded-3xl p-8 pb-1 items-start flex flex-col transition-all hover:scale-105 cursor-pointer duration-300 w-full max-md:col-start-1 max-md:col-end:2"
      >
        <span className="text-slate-200 font-light text-xl border-2 border-slate-200 rounded-full px-3  mb-2">
          PROJETOS
        </span>
        <figure className="w-full h-36 overflow-hidden rounded-lg items-center justify-center flex">
          <img
            src={projects[projectNumber].image}
            alt="foto do projeto"
            className="object-cover w-full rounded-lg mt-1 group-hover:scale-110 transition-all ease-in-out duration-1000"
          />
        </figure>
        <h1 className="text-slate-200 text-start font-normal text-xl border-b-2 mt-1 w-full pb-1">
          {projects[projectNumber].name}
        </h1>

        <div className="items-center flex flex-row gap-2">
          {projects[projectNumber].technologies.map((item) => (
            <span
              key={item}
              className="text-neutral-400 text-sm px-2 rounded-full border border-neutral-400 mt-3"
            >
              {item}
            </span>
          ))}
        </div>
      </Modal.Trigger>
      <Modal.Portal>
        <Modal.Overlay className="fixed inset-0 max-md:h-full max-md:top-0 z-10 bg-black bg-opacity-40 backdrop-blur-sm" />
        <Modal.Content className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-screen-xl h-[90%] max-h-screen-xl border border-slate-300 p-8 bg-black rounded-3xl z-10 max-md:h-full max-md:w-full max-md:border-none overflow-auto">
          <div className="w-1/2 flex flex-row item-center justify-between">
            <Modal.Close className="mb-8">
              <CaretCircleLeft color="#fff" size={40} />
            </Modal.Close>
            <Modal.Title className="text-white mt-1 font-medium text-2xl -mr-14">
              Projetos
            </Modal.Title>
          </div>
          <div className="grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1">
            {projects.map((item) => (
              <ProjetctCard key={item.id} {...item} />
            ))}
          </div>
        </Modal.Content>
      </Modal.Portal>
    </Modal.Root>
  );
};

export default Projects;
