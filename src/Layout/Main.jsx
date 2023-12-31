import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Main = () => {
    return (
        <div>
           <Navbar /> 
           <div className='min-h-[calc(100vh-200px)]'>
                <Outlet></Outlet>
            </div>
           <Footer />
        </div>
    );
};

export default Main;