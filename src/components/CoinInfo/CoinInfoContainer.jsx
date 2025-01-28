import { useQuery } from "@tanstack/react-query";
import CoinInfo from "./CoinInfo";
import useStore from "../../zustangState/store";
import { useState } from "react";
import {fetchCoinHistoricData} from '../../services/fetchCoinHistoricData'
import PageLoader from '../PageLoader/PageLoader'
import Alert from "../Alert/Alert";


function CoinInfoContainer({ coinId }){
    const {currency} = useStore();

    const[days, setDays] = useState (7);
    const [interval, setCoinInterval] =useState('');


const {data: historicData, isLoading, isError}
 = useQuery(
    ['coinHistoricData', coinId, currency, days, interval],
() => fetchCoinHistoricData(coinId, interval , days, currency ),{
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
});

if(isLoading){
    return <PageLoader />
}
if(isError){
    return <Alert message="Error fetching data" type='error' />

}
    return(
<> 
    <CoinInfo 
    historicData={historicData}
    setDays={setDays} 
    setInterval={setCoinInterval}
    />


</>
    );
}
export default CoinInfoContainer;