import { Link } from "react-router-dom"
import { servicesData } from "./Data"
const Development = () => {
  return (
    <div>
      <div class="bg-white p-6 md:p-12">
        <h1 class="justify-center flex text-4xl text-blue-900 font-bold h-20 " >Latest Services</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            servicesData.map((service, index) => (
              <div class="border-b-3 border-b-blue-950 border-t-3 border-t-blue-950 p-4 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-2">
                <img src={service.image} class="rounded-lg w-full" />
                <h3 class="font-semibold text-lg mt-4">{service.title}</h3>
                <p class="text-gray-600 text-sm mt-2">{service.short_des}</p>
                <Link to={"/star/"+service.id}>
                  <button class="mt-4 bg-blue-900 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-800">Learn More</button>
                </Link>
              </div>
              
            ))
          }
        </div>

      </div>


      
    </div>
  )
}

export default Development

// import { useParams } from "react-router-dom"
// import { servicesData } from "./Data"

// const Detail = () => {
//   const { id } = useParams();
//   const service = servicesData.find(s => s.id == id);

//   if (!service) {
//     return (
//       <h1 class="text-center text-red-600 text-3xl mt-20">
//         Service Not Found!
//       </h1>
//     );
//   }

//   return (
//     <div class="p-6 md:p-12">
      
//       {/* Top Section: Image Left + Text Right */}
//       <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
//         {/* Left Image */}
//         <div>
//           <img
//             src={service.image}
//             class="rounded-xl shadow-lg w-full"
//           />
//         </div>

//         {/* Right Content */}
//         <div>
//           <h1 class="text-4xl font-bold text-blue-900 mb-4">
//             {service.title}
//           </h1>

//           <p class="text-gray-700 text-lg leading-relaxed">
//             {service.lon_des}
//           </p>
//         </div>

//       </div>

//       {/* Why Choose Section */}
//       <div class="mt-16">
//         <h2 class="text-2xl font-bold text-blue-900 mb-4">
//           Why Choose Us for {service.title}?
//         </h2>

//         <p class="text-gray-600 mb-8">
//           We offer expert-level website development services with results that speak for themselves.
//         </p>

//         {/* Features Boxes */}
//         <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
//           {service.facilities.map((item, index) => (
//             <div
//               key={index}
//               class="bg-blue-900 text-white p-6 rounded-xl shadow hover:shadow-xl transition"
//             >
//               <h3 class="font-semibold text-lg">{item.title}</h3>
//               <p class="text-sm mt-2 opacity-90">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Detail;
