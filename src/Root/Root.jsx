import { Outlet } from "react-router-dom";
import NavigationBar from "../Layout/Pages/Home/Shared/NavigationBar";
import Footer from "../Layout/Pages/Home/Shared/Footer";



const Root = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;