import { useSelector } from "react-redux";
import Onboarding from "./components/Onboarding/Onboarding";
import { IGlobalState } from "./redux/GlobalState";
import Wallet from "./components/wallet/Wallet";
import { AnimatePresence } from "framer-motion";

function App() {

  const isOnboarded = useSelector(((state: {state: IGlobalState}) => state.state.isOnboarded))
  
  return (
    <AnimatePresence>
      <div className="my-20 bg-surface-black">
      {
        isOnboarded ? <Wallet /> : <Onboarding />
      }
    </div>
    </AnimatePresence>
  );
}

export default App;
