import SocialButton from "./ui/SocialButton";
import { getImage } from "../../utils";
import ConnectButton from "./ui/ConnectButton";
import { TAuthPage } from "./ui/types";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const socialAuths = [
  {
    id: 1,
    title: "Continue with Google",
    img: getImage("google.svg"),
  },
  {
    id: 2,
    title: "Continue with X (formerly Twitter)",
    img: getImage("twitter.svg"),
  },
  {
    id: 3,
    title: "Continue with X (formerly Twitter)",
    img: getImage("otherLoginLogo.svg"),
  },
];

function AuthPage(props: TAuthPage) {
  const { setStep } = props;
  const [account, setAccount] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  const connect = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        setIsLoading(true);
        const acc = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(acc?.[0] as string);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        return new Error(error as string);
      }
    }
  };

  useEffect(() => {
    if (account) {
      setStep(2);
    }
  }, [account, setStep]);

  return (
    <div className="bg-[#FAFAFA0A] z-50 w-full p-4 h-[310px] rounded-[16px]">
      {/* social authentications */}
      <div className="space-y-3">
        {socialAuths.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: item.id / 10,
                },
              }}
            >
              <SocialButton
                key={item.id}
                isGoogle={item.id === 1}
                title={item.title}
                icon={<img src={item.img} />}
              />
            </motion.div>
          );
        })}
      </div>
      {/* divider */}
      <div className="flex my-5 gap-5 items-center justify-between">
        <div className="w-full border rounded-full border-[#FFFFFF1A]" />{" "}
        <span className="text-xs font-semibold text-text-light-tertiary">
          OR
        </span>
        <div className="w-full border rounded-full border-[#FFFFFF1A]" />{" "}
      </div>
      {/* wallet connects */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 1,
          },
        }}
        className="flex items-center gap-4"
      >
        <ConnectButton
          title={"Metamask"}
          onClick={() => connect()}
          isLoading={isLoading}
          icon={<img className="-mb-1" src={getImage("metamask.svg")} />}
        />
        <ConnectButton
          title="WalletConnect"
          icon={<img className="-mb-1" src={getImage("walletconnect.svg")} />}
        />
      </motion.div>
    </div>
  );
}

export default AuthPage;
