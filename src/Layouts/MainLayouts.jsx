import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Bannar from "../Components/Bannar";
import BannarImg from "../assets/bannar.jpg";

const MainLayouts = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${BannarImg})` }}
      >
        <Navbar />
        <Bannar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayouts;
