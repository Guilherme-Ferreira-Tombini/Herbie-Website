import Image from 'next/image'
import screenshot_image from '../../../public/img/tela.jpg'
import Stripes from './StripesMenu'

export default function InitialPage() {
  return (
<div className="h-screen w-[100%] flex flex-col justify-center">
     <Image
     src={screenshot_image}
     className="h-screen w-[100%] blur-[5px] brightness-75"
     alt="Picture of initial screen"
     quality={100}
    />
     <Stripes/>
     <div className='w-[55%] absolute right-[12%] text-slate-50 top-12'>
       <h1 className='text-center text-[100px]'>Já ouviu falar do Herbie?</h1>
       <p className='text-justify text-[32px]'>Se antes você não conhecia esse iconico veiculo dos cinemas, 
         agora pode conhece-lo e ver sua história de origem, 
         de acordo com os filmes.</p>
     </div>
              
 </div>
  )
}
