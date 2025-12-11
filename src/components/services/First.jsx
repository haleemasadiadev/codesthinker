import hero from "../../images/hero.png" 

const First = () => {
  return (
    <div>
<div class="bg-white">

  <div class="flex flex-col md:flex-row items-center justify-between p-8 md:p-16">

    <div class="md:w-1/2">
      <h1 class="text-4xl md:text-5xl font-extrabold leading-snug">
        Perfect It <span class="text-blue-700">Solutions</span><br />
        Business
      </h1>

      <p class="text-gray-600 mt-6 text-lg">
        Perfect IT Solutions provides expert services in software development,
        IT consulting, cloud solutions, network security, data management,
        technical support, web design, and system integration to empower
        business growth and efficiency.
      </p>

      <button class="mt-8 bg-blue-800 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-blue-900">
        Contact Us
      </button>
    </div>

    {<div class="md:w-1/2 mt-10 md:mt-0 flex justify-center">
      <img src={hero} class="w-[90%] max-w-lg" />
    </div> }

  </div>

</div>


    </div>
  )
}

export default First