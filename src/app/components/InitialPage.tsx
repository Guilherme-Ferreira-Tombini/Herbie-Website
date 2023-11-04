import Image from 'next/image'
import screenshot_image from '../../../public/img/tela.jpg'
import Stripes from './StripesMenu'

export default function InitialPage() {
  return (
<div className="h-screen w-[100%] flex flex-col justify-center">
     <Image
     src={screenshot_image}
     className="h-screen w-[100%]"
     alt="Picture of initial screen"
     quality={100}/>
     <Stripes/>
 </div>
  )
}
