import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const MainLayouts = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-[calc(100vh-136px)]">
        <Outlet />
      </main>
      <Footer />

    </div>
  );
};

export default MainLayouts;
