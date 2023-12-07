import Image from "next/image"
import Arrow from '../../../public/img/Arrow 1.png'

export default function ButtonDown() {
  return (
    <a href="#container" className="mt-2 hover:">
      <div className="rounded-full m-3 w-[80px] h-[80px] bg-white border-1 flex flex-col items-center justify-center">
         <Image src={Arrow} width={17} height={17} alt="Image the arrow down"/>
      </div>
   </a>
  )
}
