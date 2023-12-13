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
      default:
        return '/img/tela.jpg'; // imagem padrão se a opção não for reconhecida
    }
  };

  const imageSrc = getImageSrc(selectedOption);

  const handleOptionChange = (newOption: string) => {
    setSelectedOption(newOption);
  };

  return (
    <div id="container"className="flex flex-row items-center justify-center h-screen w-[100%] bg-black">

          <div className="bg-slate-700 flex items-center justify-center flex-col w-[50%] h-screen">

            {/* Imagens dos filmes - inicial */}
            <div className="bg-green-500 rounded-lg w-[70%] h-[80%] m-2">
               <Image 
                src={imageSrc} 
                alt="Imagem" 
                width={0} 
                height={0} 
                sizes="100vw" 
                style={{ width: '100%', height: '100%' }}
               />
            </div>
            {/* Imagens dos filmes - fim */}

            {/* Opções de filmes - inicial */}
            <div className="bg-green-400 w-[70%] h-6">
                <select onChange={(e) => handleOptionChange(e.target.value)}>
                  <option value="option1">Opção 1</option>
                  <option value="option2">Opção 2</option>
                </select>
            </div>
            {/* Opções de filmes - fim */}

          </div>

          <div className=" bg-zinc-700 flex items-center justify-center flex-col w-[50%] h-screen">

          </div>
      
    </div>
  )

  
}
