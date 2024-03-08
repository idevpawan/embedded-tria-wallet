import Input from "./ui/Input";
import { usernameSuggestions } from "../../utils/constant";
import { useState } from "react";
import { getImage } from "../../utils";
import { IUsernameSelection } from "./ui/types";
import animationData from "../../assets/lotties/littleHearts.json";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

function UsernameSelection(props: IUsernameSelection) {
  const { setStep } = props;
  const [input, setInput] = useState<string>("");
  let setDisable = input.length < 3;
  return (
    <div className="bg-[#FAFAFA0A] w-full py-4 px-6 rounded-[16px]">
      <p className="text-[22px] tracking-wider font-semibold text-[#a5a5a5]">
        Create your Tria name
      </p>
      {/* input and next action */}
      <div className="flex gap-2 mt-5">
        <Input input={input} setInput={setInput} />
        <button
          disabled={setDisable}
          onClick={() => {
            !setDisable && setStep(3);
          }}
          className={` ${
            setDisable
              ? " cursor-not-allowed bg-[#8080800D] text-white/40"
              : "bg-gradient-to-r"
          } from-[#9F8BFF] to-[#7053FF] rounded-2xl py-3 w-[120px] text-white font-neuePro font-semibold px-[14px]`}
        >
          Next
        </button>
      </div>
      <div className="flex items-center gap-1 mt-3">
        <img src={getImage("redCross.svg")} alt="" />
        <p className="text-sm font-semibold text-[#da4343]">
          Username not available
        </p>
      </div>
      {!setDisable && (
        <div className="mt-4 mb-3">
          <p className="text-xs text-[#808080]">Recommended:</p>
          <div className="flex mt-3 gap-2 items-center">
            {usernameSuggestions.map((suggested) => {
              return (
                <div
                  key={suggested.id}
                  onClick={() => setInput(suggested.suggestion)}
                  className="bg-[#8080800D] cursor-pointer px-4 py-2 rounded-full"
                >
                  <p className="text-sm text-text-light-secondary">
                    {suggested.suggestion}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {/* info */}
      <div className="border flex mt-7 gap-3 border-[#FAFAFA14] rounded-xl p-3">
        <Lottie options={defaultOptions} height={30} width={50} />
        <p className=" font-montserrat text-xs text-[#FAFAFA4D]">
          Your{" "}
          <span className="font-bold font-inter text-[#FFFFFF80]">@tria</span>{" "}
          is like Gmail, for Web3. Pay, receive and log-in to apps on any
          device, and blockchain.
        </p>
      </div>
    </div>
  );
}

export default UsernameSelection;
