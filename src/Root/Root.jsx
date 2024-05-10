import { Outlet } from "react-router-dom";
import NavigationBar from "../Layout/Pages/Home/Shared/NavigationBar";



const Root = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;