import { useState } from "react"
import Badge from "./Badge";
import { TTokenItem } from "./types";
import { getImage } from "../../../utils";

function TokenItem(props: TTokenItem) {
    const [isDetailOpened, setIsDetailOpened] = useState(false);
    return (
        <div className="hover:bg-[#252622] transition-all ease-in-out p-2.5 rounded-[12px]">
            <div
            onClick={() => props.subDetails.length && setIsDetailOpened(!isDetailOpened)}
                className={`flex justify-between items-center ${props.subDetails.length && " cursor-pointer"
                    }`}
            >
                <div className="flex items-center gap-3">
                    <img className="w-11 h-11 rounded-full" src={props.img} alt="" />
                    <div className="-mt-1">
                        <p className="font-semibold text-lg text-[#FAFAFA]">
                            {props.token_name}
                        </p>
                        <div className="flex ml-1">
                            {props.subDetails.slice(0, 3).map((item, i) => {
                                return (
                                    <div className="border bg-[#191919] -ml-1 p-1 border-[#FAFAFA14] w-6 h-6 rounded-full">
                                        {i !== 2 && (
                                            <img
                                                className="rounded-full w-4 h-3.5 ml-[0.5px]"
                                                src={item.img}
                                                alt=""
                                            />
                                        )}
                                        {i === 2 && (
                                            <p className="text-white text-[10px] font-medium">
                                                +{props.subDetails.length - 2}
                                            </p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div><p className="font-semibold text-right flex items-center gap-2 text-[#FAFAFA]">
                        <Badge /> ${props.usd_price}
                    </p>
                    <p className="text-right text-sm font-medium text-[#FAFAFA4D]">
                        {props.token_value} {props.symbol}
                    </p></div>
                {isDetailOpened && <img src={getImage("upArrow.svg")} alt="" />}
                </div>
            </div>
            {isDetailOpened && props.subDetails.map((item) => {
                return (
                    <div className="border-t flex justify-between items-center border-[#252622] my-4">
                        <div className="flex items-center mt-4 gap-4">
                            <p className="text-[#41413E] font-medium">{item.id}</p>
                            <div className="flex gap-3">
                                <img className="rounded-full w-[36px] h-[36px]" src={props.img} alt="" />
                                <div>
                                    <p className="text-[#FAFAFA] font-semibold">{props.token_name}</p>
                                    <div className="bg-[#1A1A1A] flex gap-1 items-center border rounded-full p-1 border-[#FAFAFA14]">
                                        <img src={props.img} className="w-4 h-4 rounded-full" alt="" />
                                        <p className="text-xs font-medium text-white">{props.symbol}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="font-semibold text-right text-sm text-[#FAFAFA]">
                                ${props.usd_price}
                            </p>
                            <p className="text-right text-xs font-medium text-[#FAFAFA4D]">
                                {props.token_value} {props.symbol}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default TokenItem;
