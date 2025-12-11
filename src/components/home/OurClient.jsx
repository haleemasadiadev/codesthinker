
import { CiFaceSmile } from "react-icons/ci";

const OurClient = () => {
  return (
    <div>
    <div class="bg-[#0a0099] text-white py-16 px-6">
  <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">

   
    <div class="flex-1">
      <h2 class="text-3xl md:text-4xl font-bold leading-tight">
        Our <span class="text-yellow-400">Clients,</span><br />
        In Their Own Words
      </h2>
    </div>

   
    <div class="flex-1 bg-indigo-950 p-6 rounded-xl text-white">
      <div class="flex items-center gap-3">
        <span class="text-2xl font-bold">5.0</span>

       
        <div class="flex text-yellow-400">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
      </div>

      
      <div class="flex items-center gap-4 mt-4">
        <div class="w-16 h-16 rounded-full bg-yellow-300 flex items-center justify-center text-3xl">
          <CiFaceSmile />
        </div>

        <div>
          <h3 class="text-lg font-semibold">Muhammad waseem</h3>
          <p class="text-sm text-gray-300">Customer</p>
        </div>
      </div>

 
      <p class="mt-4 text-gray-200 leading-relaxed">
        Excellent service! Codes Thinker delivered a stunning, responsive website on time.
        Highly professional team with great communication. Highly recommend for web solutions.
      </p>

    
      <button class="mt-6 bg-yellow-400 text-black px-5 py-2 rounded-md font-semibold hover:bg-yellow-300">
        Add your reviews
      </button>
    </div>

  </div>
</div>
    </div>
  )
}

export default OurClient