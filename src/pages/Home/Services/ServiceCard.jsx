import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { img, title, price } = service;

  return (
    <div className="card card-compact rounded-lg border border-inherit p-6">
      <figure className="rounded-none">
        <img src={img} alt="service" className="h-52 w-full rounded-lg object-cover" />
      </figure>
      <div className="space-y-5">
        <h2 className="card-title text-2xl font-bold pt-5">{title}</h2>
        <div className="inline-flex items-center text-xl font-semibold text-[#FF3811]">
          <p>Price: ${price}</p>
          <span> <FaArrowRight /> </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
