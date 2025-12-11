import { SiBlockchaindotcom } from "react-icons/si";
import { FaHandshake } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoMdJet } from "react-icons/io";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";


const KeyFeatures = () => {
  return (
    <div>
    

<div class="flex justify-center items-center h-110 bg-gray-100">


  <div class="flex items-center gap-10">
    
   
    <div class="w-70 h-70 border border-blue-950 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-blue-950 hover:text-white transition-colors duration-300">
  <h1 class="text-2xl font-bold  text-center leading-tight">
    KEY FEATURES
  </h1>
</div>


   
    <div class="flex flex-col gap-4">

    
      <div class="w-130  flex items-center gap-3 bg-[#0a0066] text-white px-6 py-3 rounded-full shadow-lg">
        <span class="text-xl">
          <SiBlockchaindotcom />

        </span>
        <span class="font-semibold">Blockchain Expertise</span>
      </div>

      
      <div class="w-120 flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md text-blue-950 hover:bg-blue-950 hover:text-white transition-colors duration-300">
  <span class="text-xl"><FaHandshake />

  </span>
  <span class="font-semibold">Small Business Support</span>
</div>


     
      <div class="w-110 flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md text-blue-950 hover:bg-blue-950 hover:text-white transition-colors duration-300">
        <span class="text-xl"><FaLock />
</span>
        <span class="font-semibold ">Crypto Solutions</span>
      </div>

    
      <div class=" w-100 flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md  text-blue-950 hover:bg-blue-950 hover:text-white transition-colors duration-300">
        <span class="text-xl"><IoMdJet />
</span>
        <span class="font-semibold ">Startup Business</span>
      </div>

    
      <div class="w-90 flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md  text-blue-950 hover:bg-blue-950 hover:text-white transition-colors duration-300">
        <span class="text-xl"><FaArrowRightArrowLeft />
</span>
        <span class="font-semibold">B2B Integration</span>
      </div>

     
      <div class="w-80 flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md  text-blue-950 hover:bg-blue-950 hover:text-white transition-colors duration-300">
        <span class="text-xl"><FaRegLightbulb />
</span>
        <span class="font-semibold">Fintech Innovation</span>
      </div>

    </div>
  </div>
</div>






    </div>
  )
}

export default KeyFeatures