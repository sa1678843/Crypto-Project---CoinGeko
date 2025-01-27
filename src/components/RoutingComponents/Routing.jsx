import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from '../../pages/Layout';
import PageLoader from '../PageLoader/PageLoader'
import CustomErrorBoundry from "../CustomErrorBoundry/CustomErrorBoundry";

const Home = lazy(() => import('../../pages/Home'));
const CoinDetailPage = lazy(() => import('../../pages/CoinsDetailPage'));  // Removed the leading /

function Routing() {
  return (
<CustomErrorBoundry>
<Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={
            <Suspense fallback={<PageLoader width={400} height={200} />}>
              <Home />
            </Suspense>
          }
        />
        <Route  path="/details/:coinId"  element={

            <Suspense fallback={<PageLoader width={400} height={200} />}>
              <CoinDetailPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
    </CustomErrorBoundry>   
  );
}

export default Routing;
