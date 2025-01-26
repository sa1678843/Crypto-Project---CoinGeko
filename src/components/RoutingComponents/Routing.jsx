import { Route, Routes } from "react-router-dom";
import CoinDetailPage from "../../pages/CoinsDetailPage";
import Home from "../../pages/Home";

function Routing(){

    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/details/:coinid" element={<CoinDetailPage />}/>

        </Routes>
    );
}
export default Routing;