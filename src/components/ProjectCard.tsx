import React from "react";

interface Props {
  name: string;
  technologies: string[];
  image: string;
  link: string;
}

const ProjectCard = ({ image, link, name, technologies }: Props) => {
  return (
    <a href={link}>
      <div className="group  bg-black border border-slate-500 rounded-3xl p-8  items-start flex flex-col transition-all hover:scale-105 cursor-pointer duration-300">
        <figure className="w-full h-36 overflow-hidden rounded-lg items-center justify-center flex">
          <img
            src={image}
            alt="foto do projeto"
            className="object-cover w-full rounded-lg mt-1 group-hover:scale-110 transition-all ease-in-out duration-1000"
          />
        </figure>
        <h1 className="text-slate-200 text-start font-normal text-xl border-b-2 mt-1 w-full pb-1">
          {name}
        </h1>

        <div className="items-center flex flex-row gap-2">
          {technologies.map((item) => (
            <span
              key={item}
              className="text-neutral-400 text-sm px-2 rounded-full border border-neutral-400 mt-3"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
