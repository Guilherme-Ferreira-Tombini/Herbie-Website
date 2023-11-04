import LogoBrand from "./LogoBrand"

export default function StripesMenu() {
  return (
   <div className="w-[190px] h-screen bg-slate-900 absolute left-[9%] flex flex-col flex-wrap">
     <LogoBrand/>
     <div className="bg-red-600 w-[20%] h-[100vh]"/>
     <div className="bg-white w-[30%] h-[100vh]"/>
     <div className="bg-blue-800 w-[50%] h-[100vh]"/>
   </div>
  )
}
