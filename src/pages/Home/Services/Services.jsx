import { useEffect, useRef, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [asc, setAce] = useState(true);
  const searchRef = useRef(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/services?search=${search}&sort=${asc ? "asc" : "desc"}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setServices(data);
      });
  }, [asc, search]);

  const handleSearch = () => {
    setSearch(searchRef.current.value);
  }

  return (
    <>
      <div className="text-center space-y-5">
        <h5 className="text-xl font-semibold md:font-bold text-[#FF3811] pt-16">
          Service
        </h5>
        <h2 className="text-3xl md:text-5xl font-semibold md:font-bold md:tracking-wide">
          Our Service Area
        </h2>
        <p className="text-gray-500 md:leading-7">
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
        <div className="form-control w-1/3 mx-auto">
          <div className="input-group">
            <input
            ref={searchRef}
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <button onClick={() => setAce(!asc)} className="my-btn-pending">
          {asc ? "Price: High to Low" : "Price: Low to High"}
        </button>
      </div>
      <div className="my-margin-zero grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
        {loading && (
          <div>
            <progress className="progress w-56 text-center"></progress>
          </div>
        )}
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center my-margin-zero pt-12">
        <button className="my-outline-btn">See More</button>
      </div>
    </>
  );
};

export default Services;
