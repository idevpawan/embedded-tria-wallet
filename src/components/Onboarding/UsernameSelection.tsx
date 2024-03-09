import Input from "./ui/Input";
import { usernameSuggestions } from "../../utils/constant";
import { useEffect, useState } from "react";
import { getImage } from "../../utils";
import { IUsernameSelection } from "./ui/types";
import animationData from "../../assets/lotties/littleHearts.json";
import Lottie from "react-lottie";
import { motion } from "framer-motion";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

const dummyExistedNames = ["kunl444", "kunaaal65"]

function UsernameSelection(props: IUsernameSelection) {
  const { setStep } = props;
  const [input, setInput] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<boolean>(false);

  const setDisable: boolean = input.length < 3;

  const onHandleNext = () => {
    setStep(3);
  }

  useEffect(() => {
    if (dummyExistedNames.find((e) => e === input)) {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
    }
  }, [input])

  return (
    <div className="bg-[#FAFAFA0A] w-full py-4 px-6 rounded-[16px]">
      <p className="text-[22px] tracking-wide font-semibold text-[#a5a5a5]">
        Create your Tria name
      </p>
      {/* input and next action */}
      <div className="flex gap-2 mt-5">
        <Input input={input} setInput={setInput} />
        <button
          disabled={setDisable}
          onClick={onHandleNext}
          className={` ${
            setDisable
              ? " cursor-not-allowed bg-[#8080800D] text-white/40"
              : "next-btn"
          } rounded-2xl py-3 w-[120px] text-white font-neuePro font-semibold px-[14px]`}
        >
          Next
        </button>
      </div>
      {errorMsg && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 0.1
        }
      }} className="flex items-center gap-1 mt-3">
        <img src={getImage("redCross.svg")} alt="" />
        <p className="text-sm font-semibold text-[#da4343]">
          Username not available
        </p>
      </motion.div>}
      {!setDisable && (
        <div className="mt-4 mb-3">
          <p className="text-xs text-[#808080]">Recommended:</p>
          <div className="flex mt-3 gap-2 items-center">
            {usernameSuggestions.map((suggested) => {
              return (
                <motion.div
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: suggested.id /10
                  }
                }}
                  key={suggested.id}
                  onClick={() => setInput(suggested.suggestion)}
                  className={`${input === suggested.suggestion ? "bg-[#F2F2F2] text-[#101010]" : "bg-[#8080800D] text-text-light-secondary"} connectbtn-hover transition-all ease-in-out cursor-pointer px-4 py-2 rounded-full`}
                >
                  <p className="text-sm ">
                    {suggested.suggestion}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}
      {/* info */}
      <div className="border shine-effect flex mt-7 gap-3 border-[#FAFAFA14] rounded-xl p-3">
        <Lottie style={{
          cursor: "default"
        }} options={defaultOptions} height={30} width={50} />
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
