import { useEffect, useState } from "react";
import { getImage } from "../../utils";
import UsernameSelection from "./UsernameSelection";
import animationData from "../../assets/lotties/largeGrid.json";
import Lottie from "react-lottie";
import AuthPage from "./AuthPage";
import { useDispatch } from "react-redux";
import { setOnboarded } from "../../redux/GlobalState";
import { motion } from "framer-motion";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

function Onboarding() {
  const [step, setStep] = useState<number>(1);
  const dispatch = useDispatch();

  const handleBack = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    if (step === 3) {
      setTimeout(() => {
        dispatch(setOnboarded(true));
      }, 3000);
    }
  });

  return (
    <div className="onboaring-bg rounded-[20px]">
      <motion.div
        exit={{
          scale: 0.8,
          opacity: 0,
          transition: {
            duration: 1,
          },
        }}
        className="w-[448px] bg-[#101010] overflow-hidden relative h-[840px] flex flex-col justify-between custom-border rounded-[20px] p-4"
      >
        {step === 3 && (
          <Lottie
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            options={defaultOptions}
            speed={1.5}
            height="100%"
            width="100%"
          />
        )}
        {step !== 3 && (
          <img
            className="absolute top-0 h-[400px] left-0 w-full right-0"
            src={getImage("staticGrid.png")}
            alt=""
          />
        )}
        {step !== 1 && (
          <img
            role="presentation"
            className="absolute cursor-pointer"
            src={getImage("leftArrow.svg")}
            onClick={handleBack}
            alt="back"
          />
        )}
        <div className="flex z-20 flex-col mt-16 justify-center items-center">
          <motion.img
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.1,
                duration: 0.5,
              },
            }}
            className="w-[93px] ml-5 h-[93px]"
            src={getImage("logo.svg")}
            alt="logo"
          />
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.1,
                duration: 0.5,
              },
            }}
            className="text-text-light-secondary text-[22px] text-center leading-[27.5px]"
          >
            Login to <br /> <span className="font-bold">tria</span> Demo
          </motion.p>
        </div>
        <div>
          {/* step 1: when user first enters the page and tries to connect the wallet */}
          {step === 1 && <AuthPage setStep={setStep} />}
          {/* step 2: after user connect wallets the choose username page will appear */}
          {step === 2 && <UsernameSelection setStep={setStep} />}
          <div className="flex max-w-[153px] text-[#535353] hover:text-[#808080] rounded-[15px] p-2 mx-auto mb-6 cursor-pointer mt-4 gap-2 hover:bg-[#FAFAFA14] justify-center">
            <img
              className="rounded-[4.39px] w-5 h-5"
              src={getImage("footerLogo.svg")}
              alt=""
            />
            <p className="text-sm font-semibold ">Powered by Tria</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Onboarding;
