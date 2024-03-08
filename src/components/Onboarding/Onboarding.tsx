import { useState } from "react";
import { getImage } from "../../utils";
import SocialButton from "./ui/SocialButton";
import ConnectButton from "./ui/ConnectButton";
import UsernameSelection from "./UsernameSelection";
import animationData from "../../assets/lotties/largeGrid.json";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  width: "100%",
};

function Onboarding() {
  const [step, setStep] = useState<number>(1);

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="w-[448px] overflow-hidden relative h-[840px] flex flex-col justify-between custom-border rounded-[20px] border-2 border-[#80808026] p-4">
      {step === 3 && (
        <Lottie
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
          }}
          options={defaultOptions}
          height="100%"
          width="100%"
        />
      )}
      {step !== 3 && (
        <img
          className="absolute top-0 left-0 right-0"
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
        <img
          className="w-[93px] ml-5 h-[93px]"
          src={getImage("logo.svg")}
          alt="logo"
        />
        <p className="text-text-light-secondary text-[22px] text-center leading-[27.5px]">
          Login to <br /> <span className="font-bold">tria</span> Demo
        </p>
      </div>
      <div>
        {/* step 1: when user first enters the page and tries to connect the wallet */}
        {step === 1 && (
          <div className="bg-[#FAFAFA0A] z-50 w-full p-4 h-[310px] rounded-[16px]">
            {/* social authentications */}
            <div className="space-y-3">
              <SocialButton
                isGoogle
                title="Continue with Google"
                icon={<img src={getImage("google.svg")} />}
              />
              <SocialButton
                title="Continue with X (formerly Twitter)"
                icon={<img src={getImage("twitter.svg")} />}
              />
              <SocialButton
                title="Continue with X (formerly Twitter)"
                icon={<img src={getImage("otherLoginLogo.svg")} />}
              />
            </div>
            {/* divider */}
            <div className="flex my-5 gap-5 items-center justify-between">
              <div className="w-full border-2 rounded-full border-[#FFFFFF1A]" />{" "}
              <span className="text-xs font-semibold text-text-light-tertiary">
                OR
              </span>
              <div className="w-full border-2 rounded-full border-[#FFFFFF1A]" />{" "}
            </div>
            {/* wallet connects */}
            <div className="flex items-center gap-4">
              <ConnectButton
                title="Metamask"
                icon={<img className="-mb-1" src={getImage("metamask.svg")} />}
              />
              <ConnectButton
                title="WalletConnect"
                icon={
                  <img className="-mb-1" src={getImage("walletconnect.svg")} />
                }
              />
            </div>
          </div>
        )}
        {/* step 2: after user connect wallets the choose username page will appear */}
        {step === 2 && <UsernameSelection setStep={setStep} />}
        <div className="flex mb-6 mt-4 gap-2 justify-center">
          <img
            className="rounded-[4.39px] w-5 h-5"
            src={getImage("footerLogo.svg")}
            alt=""
          />
          <p className="text-sm font-semibold text-[#808080]">
            Powered by Tria
          </p>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
