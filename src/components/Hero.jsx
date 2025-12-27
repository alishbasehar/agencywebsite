
import assets from "../images/assets"
const Hero = () => {
  return (
    <div className=' container mx-auto max-w-7xl flex flex-col items-center gap-6 py-20 px-4 sm:px-12 
    lg:px-25 text-center overflow-hidden text-gray-700 dark:text-white'>
<div className="flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full">
 <img className="w-20" src={assets.group_profile} />
 <p className="text-xs font-medium">trusted by 10+ people</p>
</div>
<h1
className="text-4xl sm:text-5xl md:text-6xl font-medium xl-leading-[95px] max-w-5xl"
>Turning imagination into {" "}
 <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">digital</span> impact </h1>
<p className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 pb-3"> creatting a meaningful connections and turning big ideas into reality</p>
    </div>
  )
}

export default Hero