// import { useState } from "react";
import "./App.css";
import Routing from "./components/RoutingComponents/routing";

// import { CurrencyContext } from "./context/CurrencyContext";
function App() {
  // const [currency, setCurrency] = useState("usd");

  return (
    <>
        {/* <CurrencyContext.Provider value={{ currency, setCurrency }}> */}
       
        <Routing/>

    {/* </CurrencyContext.Provider> */}

    </>
  );
}

export default App;
