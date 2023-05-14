import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <main>
            <Banner />

          <div className="space-y-3">
            <h3 className="text-5xl text-center font-extrabold text-red-500">Hello tailwind</h3>
            <h3 className="text-5xl text-center font-bold text-[#FF3811]">Hello tailwind</h3>
            <h3 className="text-5xl text-center font-semibold">Hello tailwind</h3>
            <h3 className="text-5xl text-center font-medium">Hello tailwind</h3>
            <h3 className="text-5xl text-center">Hello tailwind</h3>
            <h2 className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas ullam corporis, nisi iste consectetur ipsum reprehenderit libero incidunt sequi illum cum magni ratione mollitia saepe consequuntur earum excepturi doloribus.</h2>
        </div>  
        </main>
        
    );
};

export default Home;