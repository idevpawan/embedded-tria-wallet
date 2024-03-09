import CountUp from "react-countup"
import { getImage } from "../../../utils"
import Badge from "./Badge"
import Shimmer from "../../GlobalComponents/Shimmer"

function PortfolioCard({stopShimmer}: {stopShimmer: boolean}) {
    return (
        <div className="p-[1px] bg-gradient-to-r from-[#9F8BFF4D] mt-3 mb-4 to-[#7053FF4D] rounded-xl">
            <div className="w-full relative overflow-hidden flex flex-col justify-between bg-[#191919] py-3 px-5 rounded-xl h-[189px]">
                <img className="absolute left-0 top-0" src={getImage("portfolioPoly1.png")} alt="" />
                <img className="absolute left-1/2 transform -translate-x-1/2 top-0" src={getImage("portfolioPoly1.png")} alt="" />
                {/* gradient */}
                <div className="bg-[#433FE5] w-full blur-[50px] left-32 top-32 -inset-1 h-full absolute" />
                <div className="bg-gradient-to-b from-[#7472f4] to-[#FBFBFB00] w-full blur-[50px] left-0 top-40 -inset-1 h-full absolute" />
                <div className="mt-1 relative">
                    <div className="flex gap-2 items-center">
                        <p className="text-[#818181] font-semibold">Assets Up</p>
                        <Badge />
                    </div>
                    <div className="flex gap-3 items-center mt-1">
                        {stopShimmer ? <p className=" text-3xl font-semibold text-white tracking-wider"><CountUp
                            start={0.00}
                            end={1838.83}
                            duration={2}
                            decimals={2}
                            prefix="$"
                        >
                        </CountUp></p> : <Shimmer type="totalAssets" />}
                        <img className="cursor-pointer" src={getImage("refresh.svg")} alt="" />
                    </div>
                </div>
                <div className="flex relative items-center gap-3">
                    <button className="bg-[#10101080] hover:bg-gradient-to-l transition-all ease-in-out from-[#9f8bff] to-[#7053ff] flex items-center py-2.5 justify-center w-full gap-2 rounded-[7px]">
                        <img src={getImage("buyIcon.svg")} alt="" />
                        <p className="font-semibold text-[#FAFAFA]">Buy</p>
                    </button>
                    <button className="bg-[#10101080] flex items-center transition-all ease-in-out hover:bg-gradient-to-l from-[#9f8bff] to-[#7053ff] py-2.5 justify-center w-full gap-2 rounded-[7px]">
                        <img src={getImage("sendIcon.svg")} alt="" />
                        <p className="font-semibold text-[#FAFAFA]">Send</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard