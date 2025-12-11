
import servicesOffer from "../../images/servicesImage.webp"
const ServicesOffer = () => {
  return (
    <div>
     <div class="bg-white text-gray-900 font-sans">

  <div class="max-w-6xl mx-auto px-6 py-12">
   
    <div class="text-center mb-10">
      <h2 class="text-4xl font-extrabold">
        <span class="text-blue-700">Services</span> We Offer
      </h2>
      <p class="text-gray-600 mt-2">
        TOJO GLOBAL offers crypto solutions, targeted marketing, impactful design,
        custom development, and professional video editing to elevate your brand.
      </p>
    </div>

    <div class="flex flex-col md:flex-row gap-8">
     
      <div class="flex flex-col space-y-4 w-full md:w-1/3">
        <button class="bg-indigo-700 to-blue-700 text-white font-semibold py-3 rounded-3xl">
          Development
        </button>
        <button class="border  border-gray-300 font-semibold py-3 rounded-3xl hover:bg-blue-800">
          Management
        </button>
        <button class="border border-gray-300 font-semibold py-3 rounded-3xl hover:bg-blue-800">
          Marketing
        </button>
        <button class="border border-gray-300 font-semibold py-3 rounded-3xl hover:bg-blue-800">
          Graphics & Visuals
        </button>
        <button class="border border-gray-300 font-semibold py-3 rounded-3xl hover:bg-blue-800">
          Video Editing
        </button>
        <button class="border border-gray-300 font-semibold py-3 rounded-3xl hover:bg-blue-800  cs">
          Content Writing
        </button>
      </div>

     
      <div class="w-full md:w-2/3">
        <div class="rounded-xl overflow-hidden">
          <img src={servicesOffer} alt="People working together" class="w-full h-64 object-cover" />
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 text-center mt-6 font-semibold">
          <p>Custom Development</p>
          <p>Web App Development</p>
          <p>Mobile App Development</p>
          <p>Blockchain Dev</p>
          <p>Crypto Token Dev</p>
          <p>Wordpress Dev</p>
        </div>
      </div>
    </div>
  </div>

</div>



    </div>
  )
}

export default ServicesOffer