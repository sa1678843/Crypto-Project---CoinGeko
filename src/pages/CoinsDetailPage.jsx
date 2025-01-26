import { useParams } from "react-router-dom";

function CoinDetailPage(){
    const { coinId } = useParams();
    return(
        <div>
            <h1>Coins Details Page {coinId}</h1>
        </div>
    )
}
export default CoinDetailPage;