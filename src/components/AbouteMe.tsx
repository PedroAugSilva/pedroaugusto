import * as Toggle from "@radix-ui/react-toggle";
import { useState } from "react";
import clsx from "clsx";

const AbouteMe = () => {
  const [isToggle, setToggle] = useState<boolean>(false);

  return (
    <div className="relative max-lg:row-start-3 max-lg:col-start-1 max-lg:col-end-3 max-md:col-start-1 max-md:col-end-2 max-md:row-start-4">
      <div
        className={clsx(
          "bg-violet-800 rounded-3xl p-8 items-start absolute w-full flex flex-col duration-500 ease-in-out text-white bottom-0 right-0 transition-all",
          {
            "h-[180%] max-lg:h-[130%]": isToggle,
            "h-[100%]": !isToggle,
          }
        )}
      >
        <span className=" text-xl border-2 border-white rounded-full px-3">
          SOBRE MIM
        </span>
        <div
          className={clsx(
            "overflow-hidden mt-4 text-base font-medium relative transition-all ease-in-out duration-500",
            {
              "h-[420px] max-lg:h-64 max-md:overflow-auto": isToggle,
              "h-40 ": !isToggle,
            }
          )}
        >
          <div
            className={clsx(
              "absolute bottom-0 bg-gradient-to-t from-violet-800 w-full h-1/2 transition-all duration-700",
              {
                "opacity-0": isToggle,
              }
            )}
          />
          <p>
            ⠀Olá!! Eu sou o{" "}
            <strong className="text-emerald-400"> Pedro </strong>, atualmente
            estudo na Etec (Escola Técnica Estadual de São Paulo) no curso de{" "}
            <strong className="text-emerald-400">
              {" "}
              Desenvolvimento de Sistema
            </strong>
            . Minha Paixão pela programação veio quando eu tive minhas primeiras
            aulas de{" "}
            <strong className="text-emerald-400">Programação Web</strong>, desde
            então eu sempre procuro evoluir minhas habilidades na programação e
            tudo aquilo que vou aprendendo eu gosto de representar em projetos.
          </p>
          <p>
            ⠀Descobri que eu sou capaz de tudo quando eu fiz o meu primeiro
            projeto, aquele que a gente nunca esquece hahaha, nele eu fiz o{" "}
            <strong className="text-emerald-400">clone do Spotify</strong>, foi
            especificamente aí onde eu quis estudar programação de fato, hoje em
            dia eu estou estudando{" "}
            <strong className="text-emerald-400">
              React, React Native e Node
            </strong>
            , mas eu pretendo migrar para outras linguagens como por exemplo,
            <strong className="text-emerald-400"> Java </strong>e{" "}
            <strong className="text-emerald-400"> PHP</strong>.
          </p>
        </div>
        <Toggle.Root
          className=" w-full h-11 rounded-full items-center justify-center flex bg-emerald-400 mt-1"
          onClick={() => setToggle((value) => !value)}
        >
          <h1 className="text-xl text-white font-bold">
            {isToggle ? "Ver menos" : "Ver mais"}
          </h1>
        </Toggle.Root>
      </div>
    </div>
  );
};

export default AbouteMe;
