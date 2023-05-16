import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/services')
         .then(res => res.json())
         .then(data => setServices(data))
    }, [])
    return (
        <>
        <div className="text-center space-y-5">
            <h5 className='text-xl font-semibold md:font-bold text-[#FF3811] pt-16'>Service</h5>
            <h2 className='text-3xl md:text-5xl font-semibold md:font-bold md:tracking-wide'>Our Service Area</h2>
            <p className='text-gray-500 md:leading-7 pb-12'>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable.</p>
        </div>
        <div className="my-margin-zero grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                services?.map( service => <ServiceCard key={service._id} service={service} />)
            }
        </div>
        <div className="text-center my-margin-zero pt-12">
            <button className="my-outline-btn">See More</button>
        </div>
        </>
    );
};

export default Services;