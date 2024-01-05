"use client";
import Image from "next/image"
import React, { useState } from "react";
import image from "../../../public/img/Group 9.png"

interface MovieOption {
  imageSrc: string;
  title: string;
  resume: string;
}

export default function MoviesPage() {
  const [selectedOption, setSelectedOption] = useState<string>('option1'); // inicialize com a opção padrão

  const options: Record<string, MovieOption> = {
    option1: {
      imageSrc: '/img/Herbie1.jpg',
      title: 'Se Meu Fusca Falasse (1968)',
      resume: "O piloto Jim Douglas e seu mecânico Tennessee encontram um fusca branco que parece ter vida propria. Chamando o carro de Herbie, a dupla se foca nas notícias de corrida da Califórnia, o que desagrada o comerciante Peter Thorndyke, que tenta usar sua assistente para intervir entre os amigos e o carro."
    },
    option2: {
      imageSrc: '/img/Herbie2.jpg',
      title: 'As Novas Aventuras do Fusca (1974)',
      resume: "O fusca Herbie tenta evitar que um empresário construa um edifício perto da casa de sua dona. Enquanto as máquinas se preparam para iniciar as obras, Herbie e seus amigos chegam para encerrar as obras antes que comece."
    },
    option3: {
      imageSrc: '/img/Herbie3.jpg',
      title: 'O Fusca Enamorado (1977)',
      resume: "Herbie viaja para disputar uma corrida no famoso circuito de Monte Carlo. Lá, ele se apaixona e vai viver uma grande aventura, pois criminosos esconderam uma joia valiosa no fusca, e vão fazer de tudo para recuperá-la."
    },
    option4: {
      imageSrc: '/img/Herbie4.jpg',
      title: 'A Última Cruzada do Fusca (1980)',
      resume: "Em uma corrida que começa no México e termina no Rio de Janeiro, Herbie, o fusca com personalidade própria, se envolve em várias aventuras e tenta impedir que bandidos roubem o ouro de uma valiosa cidade Inca."
    },
    option5: {
      imageSrc: '/img/Herbie5.jpg',
      title: 'The Love Bug (1997)',
      resume: "Herbie é passado para um novo dono. Juntos, eles devem lutar contra um piloto covarde e seu carro 'Horace', um malvado Herbie."
    },
    option6: {
      imageSrc: '/img/Herbie6.jpg',
      title: 'Herbie - Meu Fusca Turbinado (2005)',
      resume: "Maggie Peyton quer se tornar um piloto da NASCAR, mas seu pai superprotetor, Ray Peyton, não quer. Ray, que foi um piloto, quer que Maggie arrume um emprego de locutora de esportes para TV porque é mais lucrativo e deixe a pista para seu irmão. Quando Ray leva Maggie a um ferro-velho para escolher um carro, ela não tem ideia de que o pequeno Volkswagen chamado Herbie que ela leva para casa vai mudar sua vida"
    },
  };

  const handleOptionChange = (newOption: string) => {
    setSelectedOption(newOption);
  };

  const { imageSrc, title, resume } = options[selectedOption];
  return (
    <div id="container" className="flex flex-row items-center justify-center h-screen w-[100%] bg-herbieMovie bg-auto bg-center bg-origin-border">

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

          <div className="flex items-center justify-center flex-col w-[60%] h-screen flex-nowrap">

            <h1 className=" text-center text-6xl font-medium text-white mb-8 w-[90%]">{title}</h1>
            <p className="text-justify text-2xl font-normal text-white w-[75%]">{resume}</p>

          </div>
      
    </div>
  )

  
}
