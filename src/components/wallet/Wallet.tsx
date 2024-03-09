import { useDispatch } from "react-redux";
import { setOnboarded } from "../../redux/GlobalState";
import gridVideo from "../../assets/videos/grid.mp4"
import WalletHeader from "./ui/WalletHeader";
import PortfolioCard from "./ui/PortfolioCard";
import TokenItem from "./ui/TokenItem";
import { tokenList } from "../../utils/constant";
import SwitchButtons from "./ui/SwitchButtons";
import { getImage } from "../../utils";
import Tooltip from "./ui/ShrinkTooltip";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Shimmer from "../GlobalComponents/Shimmer";

function Wallet() {
  const [isShrinkHover, setIsShrinkHover] = useState(false);
  const [stopShimmer, setStopShimmer] = useState(false);

  useEffect(() => {

    setTimeout(() => {
      setStopShimmer(true)
    }, 3000)

  },[])

  const dispatch = useDispatch();
  // check if metamask gets disconnect
  window.ethereum.on("accountsChanged", isConnected)

  async function isConnected() {
    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    if (accounts?.length) {
      return;
    } else {
      dispatch(setOnboarded(false))
    }
  }

  return (
    <motion.div initial={{
      scale: 0.8,
      opacity: 0
    }} animate={{
      scale: [1],
      opacity: 1,
      transition: {
        duration: 1
      }
    }} className="max-h-[786px] relative w-[412px]">

      <div onMouseEnter={() => setIsShrinkHover(true)} onMouseLeave={() => setIsShrinkHover(false)} className="bg-[#1A1A1A] hover:bg-[#252622] transition-all ease-in-out cursor-pointer w-[130px] absolute -top-5 left-1/2 transform -translate-x-1/2 h-[110px] border border-[#FAFAFA14] rounded-[35px] rotate-45">
        {isShrinkHover && <Tooltip />}
        <img className="absolute rotate-[135deg] top-4 left-4" src={getImage("upArrow.svg")} alt="" />
      </div>
      <div className="rounded-[20px] relative bg-[#191919] p-6 overflow-hidden h-[752px] border border-[#FAFAFA14]">
        {/* grid video */}
        <video className="absolute h-[266px] w-full object-cover left-0 right-0 top-0" autoPlay muted loop>
          <source src={gridVideo} />
        </video>
        <div className="relative">
          {/* header */}
          <WalletHeader stopShimmer={stopShimmer} />
          <PortfolioCard stopShimmer={stopShimmer} />
          <p className="text-[#5c5c5c] font-semibold">Crypto</p>
          {/* token list */}
          <div className="overflow-auto pr-5 -ml-1 -mr-6 h-[308px] space-y-3 mt-5">
            {stopShimmer ? tokenList.map((token) => {
              return <TokenItem key={token.id} {...token} />
            }) : <Shimmer type="tokenList" />}
          </div>
          <div className="grid justify-center space-y-3">
            <SwitchButtons />
            <div className="flex items-center max-w-[120px] w-full mx-auto cursor-pointer hover:bg-[#FAFAFA14] transition-all rounded-[12px] p-2 ease-in-out justify-center gap-1">
              <img className="rounded-[6px] mr-1" src={getImage("grayTria.svg")} alt="" />
              <p className="text-[#808080] text-xs font-semibold">Open Tria</p>
              <img className="cursor-pointer" src={getImage("linkArrow.svg")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Wallet