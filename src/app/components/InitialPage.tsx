import Stripes from './StripesMenu'


export default function InitialPage() {
  return (
      <div className="h-screen w-[100%] flex flex-col justify-center bg-Initial bg-cover bg-no-repeat bg-center bg-origin-border">
          <Stripes/>
          <div className='w-[55%] absolute flex flex-col items-center right-[12%] text-slate-50 top-12'>
            <h1 className='text-center w-[100%] text-[95px]'>Já ouviu falar do Herbie?</h1>
            <p className='text-justify w-[100%] text-[31px]'>Se antes você não conhecia esse iconico veiculo dos cinemas, 
              agora pode conhece-lo e ver sua história de origem, 
              de acordo com os filmes.</p>
             
          </div>
                    
      </div>
  )
}
