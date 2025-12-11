
import { FaRegLightbulb } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";
import { MdAccessTime } from "react-icons/md";

const Standout = () => {
  return (
    <div>
  <div class="bg-blue-50 py-16">
  <div class="max-w-7xl mx-auto px-6 text-center">
    <h2 class="text-3xl md:text-4xl font-extrabold text-blue-800 mb-12">
      What Makes Us Stand Out?
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
     
      <div class="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center transition-transform transform hover:-translate-y-2 hover:bg-blue-900">
        <div class="bg-blue-500 to-blue-700 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-white text-3xl">
          <FaRegLightbulb />

        </div>
        <h3 class="text-lg font-semibold text-gray-800 text-center">
          Custom Web Experiences
        </h3>
      </div>

      
      <div class="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center transition-transform transform hover:-translate-y-2  hover:bg-blue-900">
        <div class="bg-blue-500 to-blue-700 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-white text-3xl">
          <FaPaintBrush />

        </div>
        <h3 class="text-lg font-semibold text-gray-800 text-center">
          Innovative UI/UX Design
        </h3>
      </div>

     
      <div class="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center transition-transform transform hover:-translate-y-2  hover:bg-blue-900">
        <div class="bg-blue-500 to-blue-700 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-white text-3xl">
          <CiSettings />

        </div>
        <h3 class="text-lg font-semibold text-gray-800 text-center">
          Scalable Tech Solutions
        </h3>
      </div>

      
      <div class="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center transition-transform transform hover:-translate-y-2  hover:bg-blue-900">
        <div class="bg-blue-500 to-blue-700 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-white text-3xl">
          <MdAccessTime />

        </div>
        <h3 class="text-lg font-semibold text-gray-800 text-center">
          24/7 Support & Maintenance
        </h3>
      </div>

    </div>
  </div>
</div>




    </div>
  )
}

export default Standout