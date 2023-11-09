import LogoBrand from "./LogoBrand"

export default function StripesMenu() {
  return (
   <div className="w-[190px] h-screen bg-slate-900 absolute left-[9%] flex flex-col flex-wrap shadow-3xl2">
    <div className="flex flex-col justify-center items-center absolute w-[95%] p-3">
      <LogoBrand/>
    </div>
     <div className="bg-red-600 w-[20%] h-[100vh] hover:w-[70%]"/>
     <div className="bg-white w-[30%] h-[100vh] hover:w-[70%]"/>
     <div className="bg-blue-800 w-[50%] h-[100vh] hover:w-[70%]"/>
   </div>
  )
}
