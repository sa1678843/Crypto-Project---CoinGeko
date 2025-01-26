import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function MainLayout(){
return(
    <>
    <Navbar/>{/*this is the shared ui across the page */}
    <Outlet />{/*the acual page which will be rendered along with the nabbar */}
    
    </>
)
}
export default MainLayout;