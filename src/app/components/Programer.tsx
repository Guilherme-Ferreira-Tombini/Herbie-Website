"use client";
import Image from 'next/image'
import api from '../api/api'
import { useEffect, useState } from 'react'

export default function Programer() {
  const [avatarUrl, setAvatarUrl] = useState<string | null>();
  const [name,setName] = useState<string | null>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/users/Guilherme-Ferreira-Tombini");
        setAvatarUrl(response.data.avatar_url);
        let nameUrl = response.data.login;
        const nameCorrection = nameUrl.replace(/-/g,' ');
        setName(nameCorrection);

      } catch (error) {
        console.error("Erro ao obter a URL da imagem:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div id="container3" className="flex flex-col items-center justify-center h-[53vh] w-[100%] bg-[#181818]">
      {avatarUrl ? (
        <>
        <Image
          src={avatarUrl}
          alt="Imagem perfil"
          width={190}
          height={190}
          quality={100}
          loading="lazy"
          className="rounded-full m-2"
        />
        <h1 className='text-white text-2xl'>{name}</h1>
        <h5 className='text-white'>Programador do site</h5>
        </>

      ) : (
        <p className='text-white'>Carregando...</p>
      )}
    </div>
  );
}
