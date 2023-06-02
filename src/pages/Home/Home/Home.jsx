import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
    return (
        <main className="space-y-20 lg:space-y-[130px]">
            <Banner />
            <AboutUs />
            <Services />
        </main>
        
    );
};

export default Home;