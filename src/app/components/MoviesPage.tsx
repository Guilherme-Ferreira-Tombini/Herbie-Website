"use client";
import Image from "next/image"
import React, { useState } from "react";

export default function MoviesPage() {
  const [selectedOption, setSelectedOption] = useState<string>('option1'); // inicialize com a opção padrão

  const getImageSrc = (option: string): string => {
    // Lógica para determinar a imagem com base na opção selecionada
    switch (option) {
      case 'option1':
        return '/img/Herbie1.jpg';
      case 'option2':
        return '/img/Herbie2.jpg';
      case 'option3':
        return '/img/Herbie3.jpg';
      case 'option4':
        return '/img/Herbie4.jpg';
      case 'option5':
        return '/img/Herbie5.jpg';
      case 'option6':
        return '/img/Herbie6.jpg';
      default:
        return '/img/tela.jpg'; // imagem padrão se a opção não for reconhecida
    }
  };

  const getTitle = (option: string): string => {
    // Lógica para determinar a imagem com base na opção selecionada
    switch (option) {
      case 'option1':
        return "Se Meu Fusca Falasse (1968)";
      case 'option2':
        return "As Novas Aventuras do Fusca (1974)";
      case 'option3':
        return "O Fusca Enamorado (1977)";
      case 'option4':
        return "A Última Cruzada do Fusca (1980)";
      case 'option5':
        return "The Love Bug (1997)";
      case 'option6':
        return "Herbie - Meu Fusca Turbinado (2005)";
      default:
        return "Texto sobre o resumo dos filmes"; // Texto padrão se a opção não for reconhecida
    }
  };

  const imageSrc = getImageSrc(selectedOption);
  const title = getTitle(selectedOption);
  //const resume = getResume(selectedOption);

  const handleOptionChange = (newOption: string) => {
    setSelectedOption(newOption);
  };

  return (
    <div id="container"className="flex flex-row items-center justify-center h-screen w-[100%] bg-black">
      {/* <Image src={} width={} height={}/> */}

          <div className="flex items-center justify-center flex-col w-[50%] h-screen">

            {/* Imagens dos filmes - inicial */}
            <div className="w-[70%] h-[80%] m-2">
               <Image 
                src={imageSrc} 
                alt="Imagem" 
                className=" rounded-3xl"
                width={0} 
                height={0} 
                sizes="100vw" 
                style={{ width: '100%', height: '100%' }}
               />
            </div>
            {/* Imagens dos filmes - fim */}

            {/* Opções de filmes - inicial */}
            <div className="w-[70%] h-6">
              <div className=" bg-red-600 w-[30%] rounded-lg flex flex-grow justify-center items-start h-5">
                  <li className="radio mr-1 box-border float-left h-[13.5px] relative w-[13.5px]">
                    <label
                      className={`cursor-pointer absolute w-full h-full mt-[-21px] flex items-center justify-center rounded-lg whitespace-nowrap ${
                        selectedOption === 'option1' ? 'bg-red-500' : 'bg-white'
                      }`}
                    >
                      <input
                      type="radio"
                      value="option1"
                      checked={selectedOption === 'option1'}
                      onChange={() => handleOptionChange('option1')}
                      className="all:unset absolute w-full h-full top-0 left-0 cursor-pointer opacity-0"
                    />
                    </label>
                  </li>

                  <li className="radio mr-1 box-border float-left h-[13.5px] relative w-[13.5px]">
                    <label
                      className={`cursor-pointer absolute w-full h-full mt-[-21px] flex items-center justify-center rounded-lg whitespace-nowrap ${
                        selectedOption === 'option2' ? 'bg-red-500' : 'bg-white'
                      }`}
                    >
                      <input
                      type="radio"
                      value="option2"
                      checked={selectedOption === 'option2'}
                      onChange={() => handleOptionChange('option2')}
                      className="all:unset absolute w-full h-full top-0 left-0 cursor-pointer opacity-0"
                    />
                    </label>
                  </li>

                  <li className="radio mr-1 box-border float-left h-[13.5px] relative w-[13.5px]">
                    <label
                      className={`cursor-pointer absolute w-full h-full mt-[-21px] flex items-center justify-center rounded-lg whitespace-nowrap ${
                        selectedOption === 'option3' ? 'bg-red-500' : 'bg-white'
                      }`}
                    >
                      <input
                      type="radio"
                      value="option3"
                      checked={selectedOption === 'option3'}
                      onChange={() => handleOptionChange('option3')}
                      className="all:unset absolute w-full h-full top-0 left-0 cursor-pointer opacity-0"
                    />
                    </label>
                  </li>

                  <li className="radio mr-1 box-border float-left h-[13.5px] relative w-[13.5px]">
                    <label
                      className={`cursor-pointer absolute w-full h-full mt-[-21px] flex items-center justify-center rounded-lg whitespace-nowrap ${
                        selectedOption === 'option4' ? 'bg-red-500' : 'bg-white'
                      }`}
                    >
                      <input
                      type="radio"
                      value="option4"
                      checked={selectedOption === 'option4'}
                      onChange={() => handleOptionChange('option4')}
                      className="all:unset absolute w-full h-full top-0 left-0 cursor-pointer opacity-0"
                    />
                    </label>
                  </li>

                  <li className="radio mr-1 box-border float-left h-[13.5px] relative w-[13.5px]">
                    <label
                      className={`cursor-pointer absolute w-full h-full mt-[-21px] flex items-center justify-center rounded-lg whitespace-nowrap ${
                        selectedOption === 'option5' ? 'bg-red-500' : 'bg-white'
                      }`}
                    >
                      <input
                      type="radio"
                      value="option5"
                      checked={selectedOption === 'option5'}
                      onChange={() => handleOptionChange('option5')}
                      className="all:unset absolute w-full h-full top-0 left-0 cursor-pointer opacity-0"
                    />
                    </label>
                  </li>

                  <li className="radio mr-1 box-border float-left h-[13.5px] relative w-[13.5px]">
                    <label
                      className={`cursor-pointer absolute w-full h-full mt-[-21px] flex items-center justify-center rounded-lg whitespace-nowrap ${
                        selectedOption === 'option6' ? 'bg-red-500' : 'bg-white'
                      }`}
                    >
                      <input
                      type="radio"
                      value="option6"
                      checked={selectedOption === 'option6'}
                      onChange={() => handleOptionChange('option6')}
                      className="all:unset absolute w-full h-full top-0 left-0 cursor-pointer opacity-0"
                    />
                    </label>
                  </li>
              </div>
            </div>
            {/* Opções de filmes - fim */}

          </div>

          <div className="flex items-center justify-center flex-col w-[50%] h-screen">

            <h1 className=" text-center text-3xl font-medium text-white">{title}</h1>
            {/* <p className="">{resume}</p> */}

          </div>
      
    </div>
  )

  
}
