import Bannar from "../Components/HomeComponents/Bannar";
import HowItWorks from "../Components/HomeComponents/HowItWorks";
import PremiumMembers from "../Components/HomeComponents/PremiumMembers";
import SuccessCounter from "../Components/HomeComponents/SuccessCounter";

const Home = () => {
    return (
        <div className="">
           <Bannar />
           <PremiumMembers />
           <HowItWorks />
           <SuccessCounter />
           
          
        </div>
    );
};

export default Home;