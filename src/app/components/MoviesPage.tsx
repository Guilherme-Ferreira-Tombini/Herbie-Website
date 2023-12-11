import Image from "next/image"
//import screenshot_Page_Movies from ""

export default function MoviesPage() {
  return (
    <div id="container"className="flex flex-row items-center justify-center h-screen w-[100%] bg-black">
       {/* <Image
          src={screenshot_Page_Movies}
          className="h-screen w-[100%] blur-[3.5px] brightness-75"
          alt="Picture of initial screen"
          quality={100}
          /> */}

          <div className="bg-slate-700 flex items-center justify-center flex-col w-[50%] h-screen">

            <div className="bg-green-500 rounded-lg w-[70%] h-[80%] m-2">
              <Image src={""} alt={""}></Image>
            </div>

            <div className="bg-green-400 w-[70%] h-6"></div>

          </div>

          <div className=" bg-zinc-700 flex flex-col w-[50%] h-screen">

          </div>
      
    </div>
  )
}
