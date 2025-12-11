
import { FaLeaf, FaHandshake, FaMedal } from "react-icons/fa";
import ourvalues from "../../images/our values.webp";

const OurValues = () => {
  return (
    <div>

  


    <section className="flex flex-col md:flex-row items-center justify-between gap-12 px-10 py-16 bg-white">
      
      <div className="md:w-1/2 space-y-6">
        
        <div>
          <h2 className="text-4xl font-extrabold text-black tracking-tight">
            OUR <span className="text-blue-700">VALUE</span>
          </h2>
          <div className="w-16 h-1 bg-blue-700 mt-2"></div>
        </div>

        <p className="text-xl font-semibold text-gray-800">
          A melting pot for the best ideas
        </p>

        
        <div className="space-y-6 mt-6">
          
          <div className="flex items-start gap-4">
            <div className="bg-blue-900 to-purple-800 text-white w-14 h-14 flex items-center justify-center rounded-md shadow-md text-3xl">
              <FaLeaf />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Integrity</h3>
              <p className="text-gray-700">
                We hold ourselves to a strong ethical and moral code.
              </p>
            </div>
          </div>

         
          <div className="flex items-start gap-4">
            <div className="bg-blue-900 to-purple-800 text-white w-14 h-14 flex items-center justify-center rounded-md shadow-md text-3xl">
              <FaHandshake />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Trust</h3>
              <p className="text-gray-700">
                We are dependable, loyal, and hardworking to achieve the same goal.
              </p>
            </div>
          </div>

          
          <div className="flex items-start gap-4">
            <div className="bg-blue-900 to-purple-800 text-white w-14 h-14 flex items-center justify-center rounded-md shadow-md text-3xl">
              <FaMedal />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Excellence</h3>
              <p className="text-gray-700">
                We consistently strive to deliver high-quality work without room for error.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className=" flex justify-center">
        <img
          src={ourvalues}
          alt="Our Values"
          className="w-130 rounded-2xl shadow-2xl"
        />
      </div>
    </section>


    </div>
  )
}

export default OurValues