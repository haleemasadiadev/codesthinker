import { useParams } from "react-router-dom"
import { servicesData } from "./Data"

const Star = () => {
    const { id } = useParams();
    const service = servicesData.find(s => s.id == id);


    return (
        <div class="p-6 md:p-12">

            


            <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <img
                        src={service.image} class="rounded-xl shadow-lg w-full" />
                </div>
                <div>
                    <h1 class="text-4xl font-bold text-blue-900 mb-4">{service.title}</h1>
                    <p class="text-gray-700 text-lg leading-relaxed">{service.lon_des}</p>
                </div>
            </div>

        
            <div class="mt-16">
                <h2 class="text-2xl font-bold text-blue-900 mb-4">Why Choose Us for Website Development?</h2>
                <p class="text-gray-600 mb-8">We offer expert-level website development services with results that speak for themselves.</p>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    {service.facilities.map((item, index)=> (
                     <div  class="bg-blue-900 text-white p-6 rounded-xl shadow hover:shadow-xl transition" >
                    <h3 class="font-semibold text-lg">{item.title}</h3>
                    <p class="text-sm mt-2 opacity-90">{item.description}</p>

                     </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Star;