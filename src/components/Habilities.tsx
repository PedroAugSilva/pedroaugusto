import { CaretLeft, CaretRight } from "phosphor-react";
import { useState } from "react";
import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiMysql,
} from "react-icons/si";

const Habilities = () => {
  const [index, setIndex] = useState<number>(0);
  const habilities = [
    "Habilidade de desenvolver com diversas formas de estilização",
    "Criação de componentes performaticos e acessíveis",
    "Sites com acessiblidade e responsividade",
    "Desenvolvimento multiplataforma",
    "Criação de animações",
    "Grande conhecimento e experiência de consumo de API's",
    "Manipulação de Banco de Dados com MySql",
    "Conhecimento e experiência na metodologia scrum",
  ];

  const handleUpIndex = () => {
    setIndex((value) => (value === habilities.length - 1 ? 0 : (value += 1)));
  };
  const handleDownIndex = () => {
    setIndex((value) =>
      value === habilities.length - 1 ? habilities.length - 1 : (value -= 1)
    );
  };

  return (
    <div className=" bg-amber-400 w-full rounded-3xl p-8 items-start flex flex-col justify-between max-md:col-start-1 max-md:col-end-2 max-md:row-start-3">
      <span className=" text-xl border-2 border-black rounded-full px-3">
        HABILIDADES
      </span>
      <div className="items-center justify-between flex flex-row w-full">
        <button
          onClick={handleDownIndex}
          className=" group relative items-center flex flex-row overflow-hidden"
        >
          <CaretLeft className="group-hover:scale-110 transition-all text-6xl" />
        </button>
        <span className="text-xl text-center font-semibold w-96">
          {habilities[index]}
        </span>
        <button
          onClick={handleUpIndex}
          className="group relative items-center flex flex-row overflow-hidden"
        >
          <CaretRight className="group-hover:scale-110 transition-all text-6xl" />
        </button>
      </div>
      <div className="items-center flex flex-row w-full justify-around text-3xl">
        <FaReact />
        <SiTypescript />
        <SiJavascript />
        <SiNodedotjs />
        <SiMysql />
        <SiMongodb />
      </div>
    </div>
  );
};

export default Habilities;
