import AboutUs from "../Components/AboutUs";
import BlogSection from "../Components/Blogs";
import Bannar from "../Components/HomeComponents/Bannar";
import HowItWorks from "../Components/HomeComponents/HowItWorks";
import PremiumMembers from "../Components/HomeComponents/PremiumMembers";
import SuccessCounter from "../Components/HomeComponents/SuccessCounter";
import SuccessStories from "../Components/HomeComponents/SuccessStories";
import Testimonials from "../Components/Testimonials";

const Home = () => {
    return (
        <div className="">
           <Bannar />
           <AboutUs />
           <PremiumMembers />
           <HowItWorks />
           <SuccessCounter />
           
           <SuccessStories />
           <BlogSection />
           <Testimonials />
           
          
        </div>
    );
};

export default Home;