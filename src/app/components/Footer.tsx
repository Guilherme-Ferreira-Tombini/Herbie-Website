import Image from "next/image"
import Insta from "../../../public/img/Instagram.png"
import Linke from "../../../public/img/Linkedin.png"
import Set from "../../../public/img/seta_cima.png"

export default function Footer() {
  return (
  <div className="flex flex-col justify-center items-center h-[220px] w-[100%] bg-[#121212]">
       <div className="flex flex-row items-center justify-between w-[160px] h-[73px] m-3">
         <a href='https://www.instagram.com/guilhermetombini/' 
               className="transition duration-500 ease-in-out hover:scale-110"
               target="_blank"
          >
              <Image 
                src={Insta}
                className="rounded-sm"
                width={72}
                height={72} 
                alt={"Instagram"}          
               />
          </a>

          <a href='https://www.linkedin.com/in/guilherme-ferreira-tombini-593015247/' 
             className="transition duration-500 ease-in-out hover:scale-110"
             target="_blank"
          >
             <Image 
               src={Linke}
               className="rounded-sm"
               width={75}
               height={75} 
               alt={"Linkedin"}          
              />
          </a>
          
       </div>
       <div className="flex flex-col items-center justify-between w-[25%] h-[65px] p-2">
         <a href="#container1">
           <div className="flex items-center justify-center bg-white rounded-full border-solid">
             <Image src={Set} width={76} height={76} alt={"Seta para cima"}/>
           </div> 
         </a>
       </div>
       <div className="text-white w-[100%] m-1 p-1 flex flex-col items-end">
           <p className="p-1">Copyright © 2024 Guilherme Tombini</p>
      </div>
  </div>
  )
}
