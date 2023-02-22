import { useEffect, useState } from "react";
import * as Toggle from "@radix-ui/react-toggle";
import { CaretRight, LinkedinLogo, GithubLogo } from "phosphor-react";

const ProfileCard = () => {
  return (
    <div className="max-md:px-6 w-full h-80 rounded-3xl p-8  bg-gradient-to-r from-slate-500 to-slate-700 flex flex-row justify-between md:col-start-1 lg:col-end-4 max-lg:col-end-3 max-md:col-start-1 max-md:col-end-2">
      <div className="flex items-start flex-col w-full">
        <h1 className="text-white max-lg:text-7xl lg:text-8xl max-md:text-[53px]">
          Pedro Augusto
        </h1>
        <h1 className="text-slate-300 text-4xl font-extralight">
          Souza da Silva
        </h1>
        <span className="text-slate-200 mt-3 text-sm rounded-full border border-slate-200 px-3">
          Desenvolvedor Full-Stack
        </span>
        <Toggle.Root className="relative h-11 group/toggle mt-5">
          <div className=" group/item border border-white rounded-full max-md:w-52 md:w-72 h-11 px-3 items-center flex flex-row transition-all data-[state=on] hover:bg-white justify-between absolute z-[1] bg-slate-500">
            <span className="md:text-xl max-md:text-md font-normal text-white transition-all group-hover/item:text-slate-500">
              Contate-me
            </span>
            <div className="w-6 h-6 rounded-full transition-all bg-slate-400 overflow-hidden flex items-center justify-center relative">
              <CaretRight
                color="#fff"
                size={20}
                className="group-data-[state=on]/toggle:ml-10 duration-300 transition-all absolute"
              />
            </div>
          </div>

          <div className="h-11 max-md:52 md:w-72 group-data-[state=on]/toggle:max-md:w-72 group-data-[state=on]/toggle:md:w-96 transition-all duration-300 absolute gap-2 px-3 bg-slate-600 rounded-full items-center flex justify-end flex-row">
            <a href="https://www.linkedin.com/in/pedro-s-76b0b6220/">
              <LinkedinLogo
                color="#fff"
                size={32}
                className="hover:scale-110 transition-all"
              />
            </a>
            <a href="https://github.com/PedroAugSilva">
              <GithubLogo
                color="#fff"
                size={32}
                className="hover:scale-110 transition-all"
              />
            </a>
          </div>
        </Toggle.Root>
      </div>
    </div>
  );
};

export default ProfileCard;
