
import team from "../../images/team.webp"

const AboutCT = () => {
  return (
    <div>
    <div class="bg-blue-50 py-16">
  <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
   
    <div>
      <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
        About <span class="text-blue-700">Code's</span> Thinker
      </h2>
      <p class="text-gray-600 mb-8">
        We redefine excellence in business solutions at Code's Thinker...
      </p>

      <ul class="space-y-4">
        <li class="w-2xs flex items-center bg-blue-50 rounded-full shadow-md py-1 px-4 text-gray-700  transition-all duration-300">
          <span class="w-3 h-3 bg-purple-500 to-blue-700 rounded-full mr-3"></span>
          Industry Expert Staff
        </li>
        <li class="w-2xs flex items-center bg-blue-50 rounded-full shadow-md py-1 px-4 text-gray-700 transition-all duration-300">
          <span class="w-3 h-3 bg-purple-500 to-blue-500 rounded-full mr-3"></span>
          Client-Centric Focus
        </li>
        <li class="w-90 flex items-center bg-blue-50 rounded-full shadow-md py-1 px-4 text-gray-700  transition-all duration-300">
          <span class="w-3 h-3 bg-purple-500 to-blue-500 rounded-full mr-3"></span>
          Partner rather than Vendor
        </li>
        <li class="w-4xs flex items-center bg-blue-50 rounded-full shadow-md py-1 px-4 text-gray-700  transition-all duration-300">
          <span class="w-3 h-3 bg-purple-500 to-blue-500 rounded-full mr-3"></span>
          Solutions Geared to Improve Productivity
        </li>
        <li class="w-4xs flex items-center bg-blue-50 rounded-full shadow-md py-1 px-4 text-gray-700  transition-all duration-300">
          <span class="w-3 h-3 bg-purple-500 to-blue-500 rounded-full mr-3"></span>
          Collaborative Approach Throughout the Process
        </li>
      </ul>
    </div>

      <div className="flex-1  flex justify-center h-[70vh]  ">
            <img
              src={team}
              alt="Team at Code's Thinker"
              className="rounded-xl w-full max-w-md   shadow-lg"
            />
          </div>
   
  </div>
</div>



    </div>
  )
}

export default AboutCT