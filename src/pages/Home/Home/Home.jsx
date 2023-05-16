import TopBanner from "../../Shared/TopBanner/TopBanner";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
    return (
        <main className="space-y-20 lg:space-y-[130px]">
            <Banner />
            <AboutUs />
            <Services />

          <div className="space-y-3">
            <TopBanner>
                Hello home
            </TopBanner>
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